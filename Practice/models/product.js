const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(process.mainModule.filename), "data", 
"products.json")

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if(err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent))
    })
}


module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        // //se réfère à l'objet créer, c'est ce qu'on veut stocker
        // products.push(this);
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    //static, car on veut pouvoir caller cette method sur la classe en elle même
    //et pas sur un objet instancié
    static fetchAll(cb) {
        getProductsFromFile(cb)
    }
}