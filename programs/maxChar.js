// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    let maxChar = "";
    let maxCount = 0;
    for(let el of str) {
        obj[el] = (obj[el] || 0) + 1;
    };
    for(let ele in obj) {
        if(obj[ele] > maxCount) {
            maxCount = obj[ele];
            maxChar = ele;
        }
    }
    return { maxChar, maxCount }
}
console.log(maxChar("djjjjjjjjjjjjjhdjghgggglo"))