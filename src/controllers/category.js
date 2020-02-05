const categoryModel = require('../models/category')
const miscHelper = require('../helpers/helpers');

module.exports ={
    getCategory: (req,res)=>{
        categoryModel.getCategory()
        .then((result)=>{
            res.json(result)
        })
        .catch(err=> console.log(err));
    },
    insertCategory: (req, res) => {
        const {name_category} = req.body;
        const data = {
        name_category
        }
        categoryModel.insertCategory(data)
          .then((result) => {
            categoryModel.getCategory()
            .then((result)=>{
              miscHelper.response(res, result, 200)
            })
           
          })
          .catch(err => console.log(err));
      }, 
      updateCategory: (req, res) => {
        const id_category = req.params.id_Category
        const { name_category } = req.body;
        const data = {
            name_category
        }
        categoryModel.updateCategory(id_category,data)
          .then((result) => {
            categoryModel.getCategory()
            .then((result)=>{
              miscHelper.response(res, result, 200)
            })
          })
          .catch(err => console.log(err));
      },
      deleteCategory: (req, res) => {
        const id_category = req.params.id_Category

        categoryModel.deleteCategory(id_category)
          .then((result) => {
            categoryModel.getCategory()
            .then((result)=>{
              miscHelper.response(res, result, 200)
            })
          })
          .catch(err => console.log(err));
      }

}