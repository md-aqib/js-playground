const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream.write('Hello, World!\n');
writableStream.write('This is a writable stream example.\n');

writableStream.end('end', () => {
    console.log('Data has been written to the file.');
})