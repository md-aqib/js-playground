function firstRepeatingLetterIndex(str) {
    const seen = new Map(); // Store character and its index
    for (let i = 0; i < str.length; i++) {
        if (seen.has(str[i])) {
            return seen.get(str[i]); // Return first occurrence index
        }
        seen.set(str[i], i);
    }
    console.log(seen)
    return -1; // No repeating character found
}

// Example usage:
console.log(firstRepeatingLetterIndex("ergeabcdefabc")); // Output: 0 (since 'e' repeats first)
console.log(firstRepeatingLetterIndex("abcdef")); // Output: -1 (no repeats)
console.log(firstRepeatingLetterIndex("aab")); // Output: 0 ('a' repeats first)
