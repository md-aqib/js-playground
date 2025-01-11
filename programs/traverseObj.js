const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: 4
};
  
function traverse(obj, path = '') {
  let sum = 0
    for (const key in obj) {
      const newPath = path? `${path}.${key}`: `${key}`;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursive call for nested objects
        sum += traverse(obj[key], newPath);
      } else {
        console.log(`${newPath}: ${obj[key]}`);
        if(typeof obj[key] === 'number') {
          sum += obj[key]
        }
      }
    }
    return sum;
}
  
console.log(traverse(nestedObject));
  