function isPalindrome(str) { 
    return str === str.split('').reverse().join(''); 
};
//console.log(isPalindrome("assaa"));

function isPalindrome2(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i]
    };
    return str === revStr;
}
//console.log(isPalindrome2("abccba"))

function isPalindrome3(str) {
    let revStr = "";
    let i = str.length - 1;
    while (i >= 0) {
        revStr += str[i];
        i--
    }
    return revStr === str
}
console.log(isPalindrome3("abccbaa"))