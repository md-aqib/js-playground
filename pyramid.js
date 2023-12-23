function pyramid(height) {
    for(let i=1; i <= height; i++) {
        let str = "";
        for(let j=0; j < height - i; j++){
            str += " "
        }
        for(let k=0; k < 2 * i -1; k++){
            str = str + "*"
        }
        console.log(str)
    }
}

function pyramid2(height) {
    for(let i=1; i <= height; i++) {
        let str = "";
        str = " ".repeat(height - i) + "*".repeat(2 * i -1)
        console.log(str)
    }
}

pyramid(5)