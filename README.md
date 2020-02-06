# login

#### post /user/ 
before we use the this web, we must login with input your name and password if success you will get a token and in phpmyadmin on database latian-status, if there are statusNow=0 and the finalTime<this date, it will update statusNow=-1 or expired

#### post /user/verify
after you get token from login, you must input this token to verify if success you will see product name in page 1 and limit 4

## Product

in product you can input, select and see the product name, delete product and update product

#### post /product/
you can input the new product

#### patch/product/:id_product
you can update the product with choose id_product where you want to update

#### delete /product/:id_product
you can delete the product with choose id_product where you want to update

#### get /product/
you will see all of product 

#### get /product/:page%%:limit
you can choose the page number with limit of show the product

#### get /product/:sortby%%:mode
you can choose the sort by name, id, category or other with mode ascending or descending

#### get /product/:id_product
you can select the product with choose id_product where you want to show


## category

in product you can input, select and see the product name, delete product and update product

#### post /category/
you can input the new category

#### get/category/
you will see all of category

#### patch/category/:id_Category
you can update the category with choose id_Category where you want to update

#### delete /category/:id_Category
you can delete the category with choose id_category where you want to update

## shop
in shop you can add/reduce order, show history order, search product, and track record of order

#### post /shop/:user/:id_buyer
you can add and reduce the new order with input in id_buyer is the number of order and :user is the user, who to input this order. if you want to add or reduce the order with number order and id_item is same, it will update your order automatic. this method can't be the same order

#### get /shop/:id_buyer
you can select the id_buyer if you want to show history about this id_buyer

#### patch /final/:id_buyer/:status
you can update the status with choose id_buyer where you want to update, status=0, you add/reduce make a order
        status=1, finished, you can't to add/reduce a order and update 
                  this status
        status=-1,it order is expired and you can't update this status

#### get /shop/:record
you can show the record of order. it only show order with status=1

#### get /shop/search/:item
you can search product by name
