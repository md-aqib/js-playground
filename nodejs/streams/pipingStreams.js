//Used the pipe method to copy data from a readable stream to a writable stream.
//automatically handling backpressure and error propagation.
const fs = require('fs');

const readableStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("output.txt");

readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Data has been piped successfully.');
});