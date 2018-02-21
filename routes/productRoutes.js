const Product = require('../models/Product');

module.exports = (app) => {

//----- RETRIEVE ALL PRODUCTS FROM DATABASE --------//

  app.get('/api/products/all', (req,res) => {

    //Grab our product model to retrieve all products
    Product.find((error, products) => {
      if(error){
        res.send(error);
        console.log("error retrieving your products");
      }

      res.json({
        message: "Successfully retrieved all products from database",
        products: products
      });
    });
  });


  //----- POST PRODUCTS TO DATABASE --------//

  app.post('/api/admin/products/add', (req,res) => {

    //Create a new instance of our Package model
    const product = new Product();

    product.name = req.body.name;
    product.price = req.body.price;

    product.save((error, productSaved) => {
      if(error) {
        res.send(error);
      }

      res.json({
        message: 'successfully saved product to databse',
        productSaved: productSaved
      });
    })
  })

}