if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callBack) {
        if(!callBack) {
            throw new Error(`${callBack} is not a function`)
        };
        let newArr = [];
        for(let i = 0; i < this.length; i++) {
            if(callBack(this[i], i, this)) {
                newArr.push(this[i]);
            };
        };
        return newArr;
    }
}

let array = [2, 4, 8, 4, 4, 4]
const mappedData = array.myFilter(e => e == 4);
console.log(mappedData)