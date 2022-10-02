const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  console.log(process.env.DATABASE);
  MongoClient.connect(process.env.DATABASE)
    .then((client) => {
      console.log("Connected!!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
