const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Create streams
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt.gz');
const gzip = zlib.createGzip();

// Use pipeline to handle streams
pipeline(readableStream, gzip, writableStream, (err) => {
    if (err) {
        console.error('Pipeline failed:', err);
    } else {
        console.log('Pipeline succeeded.');
    }
});