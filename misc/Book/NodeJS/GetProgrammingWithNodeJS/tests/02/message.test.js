const messageImport = require("../../02_NodeJSApplicationExecute/message");

describe("my first own test", () => {
    it("should have 3 items in array", () => {
        expect(messageImport.messages.length).toBe(3);
    });
});