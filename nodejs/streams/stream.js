/*
readableStream.on('data'):
This attaches a listener to the 'data' event emitted by the readableStream.
The 'data' event is triggered whenever a chunk of data is available to be read from the stream.

Simplifies Code:
pipe() automatically reads data from a readable stream and writes it to a writable stream without requiring manual handling of 'data' and 'end' events.
Backpressure Management:
pipe() ensures that the readable stream pauses when the writable stream is full and resumes when it can accept more data, preventing memory overflow.
Efficient Data Flow:
Transfers data directly between streams in small chunks, reducing memory consumption.
Chaining Streams:
pipe() allows chaining multiple streams, such as transforming data before writing.
*/

const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Pipe readable stream to writable stream
readableStream.pipe(writableStream);

readableStream.on('data', chunk => {
    console.log('New Chunk:', chunk);
});
