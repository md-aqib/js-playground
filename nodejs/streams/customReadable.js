const { Readable } = require('stream');

// Create a custom readable stream
class RandomNumberStream extends Readable {
    constructor(options) {
        super(options);
        this.maxNumbers = 10;
        this.currentNumber = 0;
    }

    _read(size) {
        console.log({size})
        if (this.currentNumber < this.maxNumbers) {
            //const randomNumber = Math.floor(Math.random() * 100);
            this.push(`${this.currentNumber}\n`);
            this.currentNumber++;
        } else {
            this.push(null); // Signal end of data
        }
    }
}

// Use the custom readable stream
const randomStream = new RandomNumberStream();
randomStream.pipe(process.stdout);