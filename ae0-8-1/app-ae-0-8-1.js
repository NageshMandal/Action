// We start by including the ActionEngine class from its file. 
// This lets us use all the features that ActionEngine provides.
const ActionEngine = require("./function/core/ActionEngine-ae0-8-1");

// Note: Log and Math are basic plugins used for testing purposes.
// Here we are including the Log and Math plugins.
// Think of these as additional tools that ActionEngine can use for specific tasks.
const Log = require("./function/plugin/Log/index");
const Math = require("./function/plugin/Math/index");

// Including more plugins for various functionalities.
// HttpService for handling HTTP requests, ActionFs for file operations,
// GptManager for GPT functionalities, and Regex for regular expression tasks.
const HttpService = require("./function/plugin/HttpService/index");
const ActionFs = require("./function/plugin/ActionFs/index");
const GptManager = require("./function/plugin/GptManager/index");
const Regex = require("./function/plugin/Regex/index");
const puppeteer = require("./function/plugin/Pupeeteer/index");
const tripplaner = require("./function/plugin/Planer/index")
const blackbox = require("./function/plugin/Blackbox/index")
const chatgpt = require("./function/plugin/ChatGpt/index")
const AeFlowMaker = require ("./function/plugin/AeFlow/index")
const Ehh =require ("./function/plugin/Ehh/index")
const pari = require ("./function/plugin/Pari/index")
const copilot = require ("./function/plugin/Copilot/index")
const componentScraper = require ("./function/plugin/Components/index")
const RobocrazeScraper =require ("./function/plugin/Robocraze/index")
const makerbazarScraper = require ("./function/plugin/Makerbazar/index")

// Now, we include the configuration for ActionEngine.
// The configuration file is essentially a set of instructions that tells ActionEngine what tasks to perform.
const config = require("./form/config-ae-0-8-1");

// Creating a new instance of ActionEngine is like starting the engine of a car.
// It prepares the ActionEngine to start running based on our defined workflows.
const actionEngine = new ActionEngine();

// Loading the workflow from our configuration file into the ActionEngine.
// A workflow is a sequence of steps or actions that ActionEngine will execute.
actionEngine.loadWorkflow(config);

// Adding the previously included plugins to the ActionEngine.
// These plugins enable ActionEngine to perform additional tasks, such as logging, math operations, HTTP requests, file operations, GPT interactions, and regex tasks.
actionEngine.use(Log);
actionEngine.use(Math);
actionEngine.use(HttpService);
actionEngine.use(componentScraper);
actionEngine.use(ActionFs);
actionEngine.use(GptManager);
actionEngine.use(Regex);
actionEngine.use(puppeteer);
actionEngine.use(tripplaner);
actionEngine.use(blackbox);
actionEngine.use(chatgpt);
actionEngine.use(AeFlowMaker);
actionEngine.use(Ehh);
actionEngine.use(pari);
actionEngine.use(copilot);
actionEngine.use(RobocrazeScraper);
actionEngine.use(makerbazarScraper);

// Finally, we instruct the ActionEngine to execute a workflow named "WebPageGenerationWorkflow".
// We also provide necessary input parameters that this workflow will use.
actionEngine.act("HttpServiceTestWorkflow", {
    // Parameters to be passed to the workflow. 
    // For instance, 'url' is the API endpoint for a web request.
    url: "https://script.google.com/macros/s/AKfycbw4Ntq3_qFQaM9yGkfHfn9VakikNFmx5IsuYl2yiVuyD6whm9ALSUUlV1pUP5nlmP_F/exec",

    // 'hello' is an additional parameter, primarily for logging purposes.
    hello: "Response Received Successfully"
    // Additional parameters can be added as per the requirements of the workflow.
});
