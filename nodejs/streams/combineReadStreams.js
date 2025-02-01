const { Readable } = require('stream');
const fs = require('fs');

// Create multiple readable streams
const stream1 = fs.createReadStream('file1.txt');
const stream2 = fs.createReadStream('file2.txt');

// Combine the streams
const combinedStream = Readable.from([stream1, stream2]);

// Pipe the combined stream to a writable stream
combinedStream.pipe(process.stdout);