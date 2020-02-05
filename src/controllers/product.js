const productModel = require('../models/product')
const miscHelper = require('../helpers/helpers3');
const miscHelper1 = require('../helpers/helpers4');
var jwt = require('jsonwebtoken');
const fs=require('fs');
const {promisify}=require("util")
const unlinkAsync = promisify(fs.unlink)
module.exports ={
    getProduct: (req,res)=>{
      let page = req.params.page;
      const limit = req.params.limit;
      let nexpage=Number(page)+1
      let prepage=page-1
      page=(page-1)*limit
     
      let linknek=`http://localhost:4002/api/v1/product/${nexpage}%%${limit}`
      let linkpre="http://localhost:4002/api/v1/product/"+prepage+"%%"+limit;
        productModel.getProduct(page,limit)
        .then((result)=>{
       
      console.log(nexpage)
      console.log(linkpre)

        miscHelper1.response(res, linknek,linkpre, result, 200 )       
        })
        .catch(err=> console.log(err));
    },

    Product: (req,res)=>{
     
        productModel.Product()
        .then((result)=>{
            res.json(result)
        })
        .catch(err=> console.log(err));
    },
    productDetail: (req,res)=>{
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
        .then((result)=>{
          miscHelper.response(res, result, 200)
        })
        .catch(err=> console.log(err));
    },
    insertProduct: (req, res) => {
        // console.log(req.file.filename);
        const {nama, description, price, stock, id_category} = req.body;
        const data = {
          nama,
          description,
          price,
          stock,
          Image: `http://localhost:4002/upload/${req.file.filename}`,
          id_category,
        }
        productModel.insertProduct(data)
          .then((result) => {
            productModel.Product()
            .then((result)=>{ miscHelper.response(res, result, 200)})
           
          })
          .catch(err => console.log(err));
      }, 
      updateProduct: (req, res) => {
        const id_product = req.params.id_product
        const { nama, description, price, stock, id_category } = req.body;
        const data = {
          nama,
          description,
          price,
          stock,
          Image: `http://localhost:4002/upload/${req.file.filename}`,
          id_category,
        }
        
          productModel.deletefile(id_product).then((result)=> {
            
            let file=result[0].Image
            
            let ffile=result[0].Image.replace(`http://localhost:4002`,`.../../`)
            
              unlinkAsync(ffile, (err)=>{
                if(err){console.log(err)} 
                else {
                      productModel.updateProduct(id_product,data)
                        .then((result) => {
                          productModel.productDetail(id_product)
                          .then((result)=>{ miscHelper.response(res, result, 200)})
                        })
                    .catch(err => console.log(err));

                    }          
                  })
            })
          },
      deleteProduct: (req, res) => {
        const id_product = req.params.id_product

        productModel.deleteProduct(id_product)
          .then((result) => {
            productModel.deletefile(id_product).then((result)=> {
            
              let file=result[0].Image
              
              let ffile=result[0].Image.replace(`http://localhost:4002`,`.../../`)
              
                unlinkAsync(ffile, (err)=>{
                  if(err){console.log(err)} 
                  else {
            productModel.Product()
            .then((result)=>{ miscHelper.response(res, result, 200)})
             }})
          .catch(err => console.log(err));
            })})},
      sortBy: (req, res) => {
        const sortby = req.params.sortby
        const mode = req.params.mode
        productModel.sortBy(sortby,mode)
          .then((result) => {
            miscHelper.response(res, result, 200)
          })
          .catch(err => console.log(err));
      }


}