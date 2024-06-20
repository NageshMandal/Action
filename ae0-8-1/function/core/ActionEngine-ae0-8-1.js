// Importing the ActionEvent class
const ActionEvent = require("./ActionEvent-ae-0-8-1");

// The ActionEngine class extends (adds more to) the ActionEvent class.
class ActionEngine extends ActionEvent {
    /**
     * When a new ActionEngine is created, this section runs.
     */
    constructor() {
        // Calls the constructor of the ActionEvent class.
        super();

        /**
         * 'this.workflows' is a place to keep all the workflows.
         * A workflow is like a series of steps that do specific tasks. Each step is a part of the workflow.
         */
        this.workflows = [];

        /**
         * 'this.plugins' is a place to keep all the plugins.
         * Plugins are like extra tools that can do different tasks. Each plugin has a name.
         */
        this.plugins = {};

        /**
         * 'this.app' will hold the application context, if needed.
         * It's like keeping a reference to the main application where this engine is used.
         */
        this.app = null;

        // 'this.stepResponses' will store the outputs of each step in the workflow.
        this.stepResponses = {};


    }

    /**
     * Init method to set up the engine with an application context.
     * 
     * @param {Object} app - The application context where the engine is used.
     */
    init(app) {
        // Here, we set 'this.app' to the given application context.
        this.app = app;
    }

    /**
     * Loads a workflow into the engine.
     * 
     * @param {Object} workflowScript - The workflow to be loaded.
     */
    loadWorkflow(workflowScript) {
        // The workflowScript (which is an object) is added to the 'workflows' array.
        this.workflows.push(workflowScript);
        // You might want to check here if the workflowScript is correctly structured.
    }

    /**
     * Finds a workflow by its name.
     * 
     * @param {string} workflowName - The name of the workflow to find.
     * @return {Object|undefined} - The workflow object, or undefined if not found.
     */
    findWorkflowByName(workflowName) {
        // We search through 'this.workflows' to find a workflow with the given name.
        return this.workflows.find(workflow => workflow.name === workflowName);
        // Remember, workflow names should be unique. Otherwise, this might return the wrong one.
    }

    /**
     * Registers methods from a class as plugins.
     * 
     * @param {class} classRef - The class reference whose methods are to be used as plugins.
     */
    use(classRef) {
        // Getting all properties (including methods) of the class.
        const properties = Object.getOwnPropertyNames(classRef.prototype);

        // Looping through each property.
        properties.forEach(prop => {
            // We're only interested in methods (functions), not other types of properties.
            if (typeof classRef.prototype[prop] === 'function') {
                // We skip the constructor as it's not a regular method.
                if (prop !== 'constructor') {
                    // Add the method to the plugins object.
                    this.plugins[prop] = classRef.prototype[prop];
                    // Also, set it up to listen for events.
                    this.on(prop, classRef.prototype[prop]);
                }
            }
        });
        console.log(`${this.plugins} Has been registered`)
    }

    /**
 * Validates the parameters based on a given schema.
 * 
 * @param {Object} params - The parameters that need to be validated.
 * @param {Object} schema - The rules that determine how parameters should be validated.
 */
    validateParams(params, schema) {
        console.log(params);
        // We're going to look at each rule in the schema one by one.
        for (const key in schema) {
            // 'param' is the actual value we got for this parameter.
            const param = params[key];

            // 'rule' is what we expect for this parameter, like what type it should be.
            const rule = schema[key];

            // First, we check if this parameter is needed (required) but wasn't given.
            if (rule.required && param === undefined) {
                // If it's missing, we stop and show an error saying it's required.
                throw new Error(`Validation Error: '${key}' is required`);
            }

            // Next, we check if the type of the parameter matches what we expect.
            // For example, if we expect a number, but got a string, that's a problem.
            if (rule.type && typeof param !== rule.type) {
                // If the type is wrong, we stop and show an error about it.
                throw new Error(`Validation Error: '${key}' must be a ${rule.type}`);
            }

            // Here, you can add more checks if you need to, like making sure a string isn't too long,
            // or a number is within a certain range, or even custom checks specific to your needs.
        }
    }


    /**
  * Executes a specified workflow with given input parameters.
  * 
  * @param {string} workflowName - The name of the workflow to execute.
  * @param {Object} inputParameters - Parameters to pass into the workflow.
  */
    async act(workflowName, inputParameters) {
        // First, find the workflow by its name.
        const workflow = this.findWorkflowByName(workflowName);

        // If the workflow does not exist, stop and show an error message.
        if (!workflow) {
            throw new Error(`Workflow '${workflowName}' not found.`);
        }

        // Go through each step in the workflow one by one.
        for (const action of workflow.steps) {
            try {
                // Get the details of the current step, like which plugin and method to use, and any parameters it needs.
                const { plugin: pluginName, method: actionMethod, params: actionParams, schema, store } = action;

                // Prepare the parameters for this step, combining the step's parameters with any input parameters.
                const finalParams = this.mapParamsForAction(action, { ...actionParams, ...inputParameters });
                // Check if there is a schema defined for the current action.
                if (schema) {
                    // If a schema exists, validate the parameters against it.
                    // 'this.validateParams' is a function that checks if the parameters (finalParams) 
                    // match the rules set in the schema. 
                    // For example, it makes sure required parameters are provided and that 
                    // each parameter is of the correct type (like a number or string).
                    this.validateParams(finalParams, schema)
                }

                // Run the step's method and wait for the result.
                const result = await this.emit(actionMethod, finalParams);
                console.log(workflowName, "-", action.name, "-", 'success', "-", result);

                // If the step has a 'store' value, save the result so it can be used in later steps.
                if (store) {
                    this.stepResponses[store] = result;
                }
            } catch (error) {
                // If something goes wrong in the step, show an error message.
                console.error("Error in action:", error);
            }
        }
    }

    /**
     * Prepares parameters for a workflow action, including resolving references to previous step outputs.
     * 
     * @param {Object} action - The action object from the workflow.
     * @param {Object} allParams - All available parameters.
     * @return {Object} - Mapped parameters for the action.
     */
    mapParamsForAction(action, allParams) {
        const { schema } = action;
    
        if (!schema) return allParams;
    
        let mappedParams = {};
    
        for (const key in schema) {
          if (allParams.hasOwnProperty(key)) {
            const paramValue = allParams[key];
    
            if (typeof paramValue === 'string' && paramValue.startsWith('[') && paramValue.endsWith(']')) {
              // Handle multiple references within one key
              const references = paramValue.slice(1, -1).split(',').map(ref => ref.trim());
              const resolvedValues = references.map(ref => this.resolveReference(ref.slice(2, -2).trim()));
    
              mappedParams[key] = resolvedValues;
            } else if (typeof paramValue === 'string' && paramValue.startsWith('{{') && paramValue.endsWith('}}')) {
              // Handle single reference
              const ref = paramValue.slice(2, -2).trim();
              const resolvedValue = this.resolveReference(ref);
    
              mappedParams[key] = resolvedValue;
            } else {
              mappedParams[key] = paramValue;
            }
          }
        }
    
        return mappedParams;
      }
    
      resolveReference(reference) {
        let refData = this.stepResponses;
    
        const refParts = reference.split('.');
    
        for (const part of refParts) {
          if (refData[part] !== undefined) {
            refData = refData[part];
            if (typeof refData === 'string' && refData.startsWith('{') && refData.endsWith('}')) {
              refData = JSON.parse(refData);
            }
          } else {
            refData = undefined;
            break;
          }
        }
    
        return refData;
      }
    
    
      executeAction(pluginName, actionMethod, params) {
        if (this.plugins[pluginName]) {
          const instance = this.plugins[pluginName];
          if (typeof instance[actionMethod] === 'function') {
            
            return instance[actionMethod](params);
          } else {
            console.error(`Method ${methodName} does not exist in class ${pluginName}`);
          }
        } else {
          console.error(`Class ${pluginName} is not stored in the store`);
        }
      }



}

// This makes the ActionEngine class available for use in other parts of the program.
module.exports = ActionEngine;
