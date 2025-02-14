function groupAnagrams(words) {
    let anagramMap = new Map();

    for (let word of words) {
        let sortedWord = word.split('').sort().join(''); // Sort characters
        if (!anagramMap.has(sortedWord)) {
            anagramMap.set(sortedWord, []);
        }
        anagramMap.get(sortedWord).push(word);
    }
    console.log(anagramMap)
    return Array.from(anagramMap.values());
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));