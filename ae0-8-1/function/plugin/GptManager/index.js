// The GptManager class handles the integration and interaction with GPT (Generative Pre-trained Transformer).
class GptManager {
  constructor(config) {
    // Configuration for connecting to the GPT API.
    this.OPEN_AI = {
      model: "gpt-3.5-turbo-16k", // Specifies the GPT model to use.
      superKey: "IgEuLz!KdWUy~!VX6#hGNN4305)Rey", // Super key for API authentication.
      host: "https://script.google.com/macros/s/", // Host URL for the API.
      endpoint:
        "AKfycbw4Ntq3_qFQaM9yGkfHfn9VakikNFmx5IsuYl2yiVuyD6whm9ALSUUlV1pUP5nlmP_F/exec", // Specific endpoint for API requests.
    };
    this.STATE = config.STATE; // Configuration state.
    this.runtimeState = {}; // Runtime state to store dynamic data.
  }

  // Static method to send prompts to GPT and get a response.
  static async askGpt(prompt, oldPrompts = []) {
    if (typeof prompt === "object") {
      prompt = JSON.stringify(prompt);
    }
    try {
      // Payload for the GPT request.
      const payload = {
        supperKey: "IgEuLz!KdWUy~!VX6#hGNN4305)Rey",
        data: {
          model: "gpt-3.5-turbo-16k",
          messages: [...oldPrompts, { role: "user", content: prompt }],
        },
      };
      // The following lines are commented out and represent how you might send the request and handle the response.
      // return payload is a placeholder for demonstration.
      return payload;
    } catch (error) {
      // Error handling.
      console.error(error);
    }
  }

  // Method to manage conversation flow with GPT.
  async converse(params) {
    const { dependencies, content, pre, store } = params;
    try {
      // Prepare dynamic values based on previous interactions or predefined content.
      const dynaVal = pre ? [{ role: "system", content: pre }] : [];
      if (dependencies) {
        dependencies.forEach((load) =>
          dynaVal.push({ role: "user", content: this.runtimeState[load] })
        );
      }
      // Get the result from GPT.
      const result = await GptManager.askGpt(content, dynaVal);
      // Prepare the request object for further actions.
      let request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result),
      };
      // Log the result for debugging.
      console.log(result);
      // Store the conversation for future reference.
      // this.saveConversation(result, store);
      return request;
    } catch (error) {
      console.error(error);
    }
  }

  // Method to save conversation data.
  async saveConversation(data, key) {
    try {
      this.runtimeState[key] = data;
    } catch (error) {
      console.error(error);
    }
  }
}

// Exporting the GptManager for use in other parts of the ActionEngine.
module.exports = GptManager;
