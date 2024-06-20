class LogPlugin {
    constructor() {

    }
    // Static method to log a message
    async logMessage(params) {
        console.log("LogPlugin: ", params);
        return `Logged: ${params.message}`;
    }
}

module.exports = LogPlugin