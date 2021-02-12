const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodelearning", "root", "Serpent123.",{
                                                        dialect: "mysql", host:"localhost"
                                                    });
        
module.exports = sequelize;