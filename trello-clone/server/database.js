const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect("mongodb+srv://AdminJean:FXMhOY5Qrs7Q0hml@trelloclone.2rxqq.mongodb.net/<dbname>?retryWrites=true&w=majority")
    .then(result => {
        console.log("ok mongodb")
        callback(result)
    })
}

module.exports = mongoConnect;
