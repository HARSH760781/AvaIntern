const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/avaintern"; // replace with your database name

module.exports = function (callback) {
  MongoClient.connect(url, function (err, client) {
    if (err) throw err;
    console.log("Database connected!");
    const db = client.db("mydatabase"); // replace with your database name
    callback(db);
  });
};
