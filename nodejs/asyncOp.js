function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Simulate success or failure
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Using Promises
fetchData()
    .then(result => {
        console.log(result); // Output: Data fetched successfully!
    })
    .catch(error => {
        console.error(error); // Output: Failed to fetch data.
    });
