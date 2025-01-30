if(!Array.prototype.myMap) {
    Array.prototype.myMap = function(callBack) {
        if(!callBack) {
            throw new Error(`${callBack} is not a function`)
        };
        let newArr = [];
        for(let i = 0; i < this.length; i++) {
            newArr.push(callBack(this[i], i, this))
        };
        return newArr;
    }
}

let array = [2, 4, 8]
const mappedData = array.myMap(e => e * 2);
console.log(mappedData)