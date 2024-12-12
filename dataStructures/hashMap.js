// HASH TABLE

class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  hash(key) {
    let hashValue = 0;
    for(let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i)
    }
    return hashValue % this.buckets.length;
  }

  insert(key, value) {
    let idx = this.hash(key);
    console.log({idx})
    this.buckets[idx].set(key, value)
  }

  search(key) {
    let idx = this.hash(key);
    return this.buckets[idx].get(key); 
  }

  remove(key) {
    let idx = this.hash(key);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted; 
  }
}

const hashTable = new HashTable(20)

hashTable.insert('serena', 'moon')
hashTable.insert('amy', 'mercury')
hashTable.insert('rei', 'mars')
hashTable.insert('lita', 'jupiter')
hashTable.insert('mina', 'venus')
hashTable.insert('darien', 'tuxedo mask')

// hashTable.search('rei')
// hashTable.search('lita')
// hashTable.search('serena')

hashTable.remove('darien')
hashTable.remove('mina')

console.log(hashTable)