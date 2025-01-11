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
  
function traverse(obj) {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursive call for nested objects
        traverse(obj[key]);
      } else {
        console.log(`${key}: ${obj[key]}`);
      }
    }
}
  
traverse(nestedObject);
  