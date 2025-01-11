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
    for (const key in obj) {
      const newPath = path? `${path}.${key}`: `${key}`;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Recursive call for nested objects
        traverse(obj[key], newPath);
      } else {
        console.log(`${newPath}: ${obj[key]}`);
      }
    }
}
  
traverse(nestedObject);
  