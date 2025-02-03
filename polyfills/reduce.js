if(!Array.prototype.myReduce) {
    Array.prototype.myReduce = function(callBack, initialValue) {
        if(!callBack) {
            throw new Error(`${callBack} is not a function`)
        };
        for(let i = 0; i < this.length; i++) {
            initialValue = callBack(initialValue, this[i], i, this);
        };
        return initialValue;
    }
}

let array = [2, 4, 8, 4, 4, 4]
const mappedData = array.myReduce((a) => a + b, 0);
console.log(mappedData)