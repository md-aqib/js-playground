/*
Question: How do you handle backpressure in Node.js streams?

Answer:
Backpressure occurs when the data source produces data faster than the consumer can process it. To handle backpressure:

Use the pipe method, which automatically handles backpressure.

Use the readable.pause() and readable.resume() methods to manually control the flow of data.
*/

const fs = require('fs');

const readableStream = fs.createReadStream('largefile.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
    if (!writableStream.write(chunk)) {
        // Pause the readable stream if the writable stream is overwhelmed
        readableStream.pause();
    }
});

writableStream.on('drain', () => {
    // Resume the readable stream when the writable stream is ready
    readableStream.resume();
});

readableStream.on('end', () => {
    writableStream.end();
    console.log('Data processing complete.');
});