const Product = require('../models/Product');

module.exports = (app) => {

  // Fetches all products from the database
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

  // Fetch single product from the database
  app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById( req.params.id );

    res.send(product);    
  })

  // Adding a product to database
  app.post('/api/admin/products/add', (req,res) => {

    //Create a new instance of our product model
    const product = new Product();
    product.brand = req.body.brand;
    product.name = req.body.name;
    product.color = req.body.color;
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