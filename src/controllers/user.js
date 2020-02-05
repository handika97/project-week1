const productModel = require('../models/product')
const userModel = require('../models/user')
const shopModel = require('../models/shop')
//const miscHelper = require('../helpers/helpers');
const miscHelper = require('../helpers/helpers4');
var jwt = require('jsonwebtoken');
module.exports ={
    getLogin:(req, res)=>{
      const{nama,password}=req.body
      const data={
        nama,
        password
      }
       userModel.getlogin(nama,password)
       .then((result)=>{
        //console.log(result)
        
        for(let i=0; i<result.length;i++){
        if(data.nama==result[i].nama && data.password==result[i].password)
        { var token = jwt.sign({ id: data.nama, name: data.password }, process.env.PRIVATE_KEY);
        res.json({
          token: token
        })
       
        shopModel.updateStatus(result[i].id)
        .then((result_1)=>{})
      }
        
      }
       })
       
      },  
      loginAuth: (req,res)=>{
        let page=0
        let limit=4
        let nexpage=Number(page)+1
        let prepage=page-1
        page=(page-1)*limit
       
        let linknek=`http://localhost:4002/api/v1/product/${nexpage}%%${limit}`
        let linkpre="http://localhost:4002/api/v1/product/"+prepage+"%%"+limit;
        productModel.getProduct(0,4)
        .then((result)=>{
            
        miscHelper.response(res, linknek,linkpre, result, 200 ) 
        })
        .catch(err=> console.log(err));
    },
 
}