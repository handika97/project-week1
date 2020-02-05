const shopModel = require('../models/shop')
const productModel = require('../models/product')
const miscHelper = require('../helpers/helpers2');
const miscHelper1 = require('../helpers/helpers3');
module.exports ={
    addShop: (req, res) => {
      const id = req.params.id_buyer;
      const user = req.params.user;
        let data = {
         id_Pembeli: id,
         id_item: req.body.id_item,
         qty: req.body.qty,
        } 
        let data1 = {
          id_item: req.body.id_item,
          qty: req.body.qty,
         } 
        shopModel.showStatus(id,data.id_item)
        .then(( result )=>{
          
   if( result.length == 0 || result[0].statusNow==0 ||  result[0].statusNow!=-1 ){ 
       console.log('cinta3')
        if(data.qty>0){ console.log('cinta2')
        productModel.productDetail(data.id_item)
        .then((result) =>{
          if((result[0].stock-data.qty)>=0)
          { console.log('cinta1')
            shopModel.show(id,data.id_item,user)
            .then(( result )=>{
              shopModel.showStatus(id,data.id_item)
        .then(( result_4 )=>{
          console.log(result_4)
          console.log(result.length)
          console.log(result)
       if((result.length == 0 || result[0].item!=data.id_item) && (result.length == 0 ||result[0].id!=data.id_item )){
        shopModel.addShop(data,id,user)
        .then((result) => {
          shopModel.show(id,data.id_item)
          .then((result_1)=>{
            shopModel.showItem(id)
          .then((result_2)=>{
            
          miscHelper.response(res, result_1[0].price, result_1[0].statusNow, result_2, 200 )           
          })  
          })
        })
        .catch(err => console.log(err));
    
      
       }
       else{console.log('gagal1')}
       if((result.length > 0 && result[0].item==data.id_item) || (result.length > 0 && result[0].id!=data.id_item)){
        console.log('cinta4')
              shopModel.deleteShop(data1,id)
              .then((result) => {
                shopModel.show(id,data1.id_item)
                .then((result_1)=>{
                  shopModel.showItem(id)
                .then((result_2)=>{
                  console.log(data)
            
            miscHelper.response(res, result_1[0].price, result_1[0].statusNow, result_2, 200 ) 
          
          })})})}else{console.log('gagal')}})})}
         
      else {
        miscHelper1.response(res,"Out of Stock", 200)
      console.log('finish')}
    }
        )
        .catch(err => console.log(err)
      )
    }
  else{
    miscHelper1.response(res,"Must input quantity of order minimum 0", 200)
    }
 }
 else{ miscHelper1.response(res,"Can't add product, because status transaction complete or expired", 200)
}
})
}, 
  
      finish: (req, res) => {
        const id_status = req.params.status;
        const id_Pembeli = req.params.id_Pembeli;
        let data={
          id_item:0,
        }
        shopModel.showStatus(id_Pembeli,data.id_item)
        .then(( result )=>{
        if(result[0].statusNow==0){
        shopModel.finish(id_status,id_Pembeli)
          .then((result) => {
            miscHelper1.response(res,"status transaction complete", 200)
            productModel.updateStock(id_Pembeli)
          .then((result) => {
            data=result
            shopModel.dataOfitems(id_Pembeli)
            .then((items)=>{  
              console.log(data)
              console.log(items)
              for(let i=0; i<data.length;i++){
              productModel.updateStockfinal(data[i].stock,items[i].id_item )
              .then((final) => {
               
               
              })
              .catch(err => console.log(err));
              }
             
            })
          
            
          })
          })
          // .catch(err => console.log(err));
      } else{miscHelper1.response(res,"can't update, status transaction complete", 200)}})},

      showItem: (req, res) => {
        const id_Pembeli = req.params.id_Pembeli;
        shopModel.showItem(id_Pembeli)
        .then((result)=>{
            res.json(result)
             
        })
        .catch(err=> console.log(err));
    },
    search: (req, res) => {
      const item = req.params.item;
      shopModel.search(item)
        .then((result) => {
          res.json(result)
          console.log(item)
        })
        .catch(err => console.log(err));
    },
    record: (req, res) => {
      shopModel.record()
        .then((result) => {
          res.json(result)
        }) 
        .catch(err => console.log("result"));
    },


    }
