const promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});

promise
    .then((message) => console.log(message))  // Runs on success
    .catch((error) => console.log(error));    // Runs on failure
