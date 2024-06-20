// This file is the configuration for ActionEngine.
// It tells ActionEngine how to run a set of tasks, which we call a workflow.

const config = {
  // 'name' identifies this workflow. Here, it's named "HttpServiceTestWorkflow".
  name: "HttpServiceTestWorkflow",

  // 'steps' are the individual tasks in this workflow, executed one after another.
  steps: [
    {
      name: "locationData",

      plugin: "makerbazarScraper",

      method: "makerbazarData",

      params: {
        searchQuery: "arduino case",
        store: "data",
      },

      schema: {
        searchQuery: { type: "string", required: true },
      },
      store: "data-1",
    },
    {
      // Name of the fourth step.
      name: "Create Output file",

      // Using the "ActionFs" plugin for file operations.
      plugin: "ActionFs",

      // The "create" method to make a file.
      method: "create",

      // Parameters for creating the file.
      params: {
          content: "{{data-1}}", // Content to be saved, taken from 'posts'.
          type: 'file', // The type of operation, here it's creating a file.
          path: __dirname + '/output1.md' // Path where the file will be saved.
      },
      // 'schema' to make sure the file creation parameters are right.
      schema: {
          content: { type: 'string', required: true },
          type: { type: 'string', required: true },
          path: { type: 'string', required: true },
      }
    },
    {
      name: "locationData",

      plugin: "RobocrazeScraper",

      method: "PartsData",

      params: {
        searchQuery: "arduino case",
        store: "data",
      },

      schema: {
        searchQuery: { type: "string", required: true },
      },
      store: "data-2",
    },
    {
      // Name of the fourth step.
      name: "Create Output file",

      // Using the "ActionFs" plugin for file operations.
      plugin: "ActionFs",

      // The "create" method to make a file.
      method: "create",

      // Parameters for creating the file.
      params: {
          content: "{{data-2}}", // Content to be saved, taken from 'posts'.
          type: 'file', // The type of operation, here it's creating a file.
          path: __dirname + '/output2.md' // Path where the file will be saved.
      },
      // 'schema' to make sure the file creation parameters are right.
      schema: {
          content: { type: 'string', required: true },
          type: { type: 'string', required: true },
          path: { type: 'string', required: true },
      }
    },
    {
      name: "locationData",

      plugin: "componentScraper",

      method: "componentData",

      params: {
        searchQuery: "arduino case",
        store: "data",
      },

      schema: {
        searchQuery: { type: "string", required: true },
      },
      store: "data-3",
    },
    {
      // Name of the fourth step.
      name: "Create Output file",

      // Using the "ActionFs" plugin for file operations.
      plugin: "ActionFs",

      // The "create" method to make a file.
      method: "create",

      // Parameters for creating the file.
      params: {
          content: "{{data-3}}", // Content to be saved, taken from 'posts'.
          type: 'file', // The type of operation, here it's creating a file.
          path: __dirname + '/output3.md' // Path where the file will be saved.
      },
      // 'schema' to make sure the file creation parameters are right.
      schema: {
          content: { type: 'string', required: true },
          type: { type: 'string', required: true },
          path: { type: 'string', required: true },
      }
    },
  ],
};

// This line makes the config available to other parts of ActionEngine.
module.exports = config;