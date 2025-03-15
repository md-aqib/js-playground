//Ensures only one instance of a class is created and provides a global access point to it.
//Use Case: Caching, Logging, Database Connection Pooling.
//Example #1
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
}
  
const instance1 = new Singleton();
const instance2 = new Singleton();
  
console.log(instance1 === instance2); // ✅ true (same instance)

//Example #2
// const mongoose = require('mongoose');
// class Database {
//   constructor() {
//     if (!Database.instance) {
//       this._connect();
//       Database.instance = this;
//     }
//     return Database.instance;
//   }

//   _connect() {
//     mongoose.connect(process.env.DB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//       .then(() => console.log("✅ Database Connected"))
//       .catch(err => console.error("❌ Database Connection Error:", err));
//   }
// }

// const dbInstance = new Database();
// Object.freeze(dbInstance); // Prevents modifications to instance

// module.exports = dbInstance;

  