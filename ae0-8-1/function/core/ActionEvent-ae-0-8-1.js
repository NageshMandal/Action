// This is the ActionEvent class. It helps manage events and how plugins respond to them.

class ActionEvent {

    // The constructor sets up the ActionEvent when you create a new instance.
    constructor(config) {
        // 'listeners' keep track of all the functions that need to be called when an event happens.
        this.listeners = {};
    }

    // The 'on' method is used to listen for a specific event.
    on(event, callback) {
        // Prints a message to the console whenever an event is called.
        console.log(`${event} called`);

        // If this is the first time the event is being listened to, set up an empty list.
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        // Add the callback function to the list of listeners for this event.
        this.listeners[event].push(callback);
    }

    // The 'emit' method is called when an event happens.
    async emit(event, data, callback) {
        // Prints information about the event and the data it's handling.
        console.log("Event emit info " + event, data);

        // Gets the list of all functions that need to be called for this event.
        const eventListeners = this.listeners[event];

        // If there are functions to call for this event...
        if (eventListeners) {
            let lastResponse;

            // Wait for all the functions (listeners) to finish. They might do asynchronous tasks.
            await Promise.all(
                eventListeners.map(async (listener) => {
                    // Each listener function is called with the data, and its response is saved.
                    lastResponse = await listener(data);
                })
            );

            // Prints the response from the last function that was called for this event.
            console.log(`Response from the ${event} event: ${lastResponse}`);

            // If there was a response and a callback function is provided, return the response.
            if (lastResponse) {
                // callback(lastResponse);
                return lastResponse;
            }
        }
    }
}

// This line makes the ActionEvent class available to other parts of the program.
module.exports = ActionEvent;
