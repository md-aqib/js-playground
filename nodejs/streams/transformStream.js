//Create a transform stream that converts data to uppercase.
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        // Convert the chunk to uppercase
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

// Use the transform stream
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

console.log('Enter text (Ctrl+C to exit):');