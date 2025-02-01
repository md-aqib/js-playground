const fs = require('fs');

const readableStream = fs.createReadStream('input.txt', 'utf-8');

readableStream.on('data', (chunk) => {
    console.log("Received chunk:", chunk)
});

readableStream.on('end', () => {
    console.log('No more data to read.');
});

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});