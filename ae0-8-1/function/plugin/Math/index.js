class MathPlugin {
    constructor() {

    }
    // Static method to add two numbers
    async addNumbers(params) {
        const sum = params.a + params.b;
        console.log("MathPlugin: Sum is", sum);
        return sum;
    }
}

module.exports = MathPlugin