//Create a transform stream that converts data to uppercase.
const { Transform } = require('stream');
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        // Convert the chunk to uppercase
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

// Use the transform stream - 1
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
console.log('Enter text (Ctrl+C to exit):');

// Use the transform stream - 2
// upperCaseTransform.write('hello world\n');
// upperCaseTransform.write('this is a test\n');
// upperCaseTransform.end();
// upperCaseTransform.on('data', (chunk) => {
//   process.stdout.write(chunk);
// });

// Use the transform stream - 3
// const readableStream = fs.createReadStream('input.txt');
// const writableStream = fs.createWriteStream('output.txt');
// readableStream.pipe(upperCaseTransform).pipe(writableStream);

// Use the transform stream - 4
//Using pipeline etc.