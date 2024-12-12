//Forking creates a new Node.js process to handle concurrent tasks.

const { fork } = require('child_process');

// Fork a new process
const child = fork('./child.js');

// Send a message to the child process
child.send('Hello from parent');

// Listen for messages from the child process
child.on('message', msg => {
    console.log('Message from child:', msg);
});
