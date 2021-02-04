const fs = require("fs");
const path = require("path");

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        // //se réfère à l'objet créer, c'est ce qu'on veut stocker
        // products.push(this);
        const p = path.join(path.dirname(process.mainModule.filename), "data", 
            "products.json")
        
        //on va lire le fichier et puis une fois qu'on l'a lu, on va faire quelque chose avec
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    //static, car on veut pouvoir caller cette method sur la classe en elle même
    //et pas sur un objet instancié
    static fetchAll() {
        const p = path.join(path.dirname(process.mainModule.filename), "data", 
        "products.json")
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                return [];
            }
            console.log(fileContent, JSON.parse(fileContent))
            return JSON.parse(fileContent)
        })
    }
}