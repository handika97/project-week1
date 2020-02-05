require('dotenv').config();
const connection = require('../configs/db');

module.exports = {
    getCategory: () =>{
            return new Promise ((resolve, reject)=>{
                connection.query("SELECT * FROM category", (err,result)=>{
                    if (!err){
                        resolve(result);
                    }
                    else {
                        reject(new Error(err));
                    }
                })
            })
        },
        insertCategory: (data) => {
          return new Promise((resolve, reject) => {
            connection.query("INSERT INTO category SET ?", data, (err, result) => {
              if (!err) {
                resolve(result);
              } else {
                reject(new Error(err));
              }
            })
          })
        },
        updateCategory: (id_category, data) => {
          return new Promise((resolve, reject) => {
            connection.query("UPDATE category SET ? WHERE id = ?", [data, id_category], (err, result) => {
              if (!err) {
                resolve(result);
              } else {
                reject(new Error(err));
              }
            })
          })
        },
        deleteCategory: (id_category) => {
          return new Promise((resolve, reject) => {
            connection.query("DELETE FROM category WHERE id = ?", id_category,(err, result) => {
              if (!err) {
                resolve(result);
                connection.query("ALTER TABLE category DROP id");
                connection.query("ALTER TABLE `category` ADD `id` INT NOT NULL AUTO_INCREMENT FIRST, ADD PRIMARY KEY (`id`)");
              } else {
                reject(new Error(err));
              }
            })
          })
        },
        
    }
