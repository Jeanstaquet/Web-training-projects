const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    MongoClient.connect("mongodb+srv://AdminJean:TrelloClone@cluster0.2rxqq.mongodb.net/<dbname>?retryWrites=true&w=majority")
        .then(err, client => {
            _db = client.db();
            callback();
        })
        .catch(err => console.log(err))
}

const getDb = () => {
    if(_db) {
        return _db;
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb