//Create a duplex stream that reads data from one file, transforms it, and writes it to another file.

//The Duplex class is a combination of Readable and Writable streams. Calling super() ensures that the internal mechanisms of Duplex (like handling buffering and event listeners) are set up correctly.

//By calling super(), we can override _read and _write methods to customize how data flows through the stream.
const fs = require('fs');
const { Transform, Duplex } = require('stream');

// Create a transform stream that converts data to uppercase
class UpperCaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
}

// Create a duplex stream combining read and write
class FileDuplexStream extends Duplex {
    constructor(inputFile, outputFile) {
        super();
        this.readStream = fs.createReadStream(inputFile);
        this.writeStream = fs.createWriteStream(outputFile);
    }

    _read(size) {
        console.log({size})
        //this.readStream.on('data', (chunk) => this.push(chunk));
        this.readStream.on('data', (chunk) => this.push(chunk.toString().toUpperCase())); //without Transform
        this.readStream.on('end', () => this.push(null));
    }
  
    _write(chunk, encoding, callback) {
        this.writeStream.write(chunk, encoding, callback);
    }
}

const inputFile = 'input.txt';
const outputFile = 'output.txt';
const duplexStream = new FileDuplexStream(inputFile, outputFile);
//const transformStream = new UpperCaseTransform();
//duplexStream.pipe(transformStream).pipe(duplexStream.writeStream);

duplexStream.pipe(duplexStream.writeStream);

console.log('Transformation started...');



