const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener for the 'greet' event
emitter.on('greet', name => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
emitter.emit('greet', 'Alice'); // Output: Hello, Alice!
