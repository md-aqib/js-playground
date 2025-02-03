if(!Array.prototype.myFind) {
    Array.prototype.myFind = function(callBack) {
        if(!callBack) {
            throw new Error(`${callBack} is not a function`)
        };
        for(let i = 0; i < this.length; i++) {
            if(callBack(this[i], i, this)) {
                return this[i];
            }
        };
        return null;
    }
}

let array = [2, 4, 8]
const mappedData = array.myFind(e => e == 4);
console.log(mappedData)