const Product = require('../models/Products');



module.exports = (app) => {

//----- RETRIEVE ALL PRODUCTS FROM DATABASE --------//

  app.get("/api/admin/products/all", (req,res) => {

    //Grab our product model to retrieve all products
    Product.find((error, products) => {
      if(error){
        res.send(error);
        console.log("error retrieving your products");
      }

      res.json({message: "Successfully retrieved all products from database",
                products: products})
    })
  });


  //----- POST PRODUCTS TO DATABASE --------//

  app.post("/api/admin/products/add", (req,res) => {


    //Create a new instance of our Package model
    const product = new Product();

    product.name = req.body.name;
    product.description = req.body.description;
    product.quantity = req.body.quantity;
    product.available = req.body.quantity;
    product.image = req.body.image;
    product.gender = req.body.gender;
    product.brand = req.body.brand;

    product.save((error, productSaved) => {
      if(error){
        res.send(error);
      }

      res.json({message: 'successfully saved product to databse',
                productSaved: productSaved});
    })
  });










  //----- RETRIEVE ALL PRODUCTS FROM DATABASE --------//









  //----- RETRIEVE ALL PRODUCTS FROM DATABASE --------//

}