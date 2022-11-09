const eventEmitter = require("events");

//create class
class myEmitter extends eventEmitter {}

//init object
const emitter = new myEmitter();

//event listener
emitter.on("event", () => {
  console.log("event");
});

//init event
emitter.emit("event");

//practical use for emiiter is a log of parsed connections to and from client and server
