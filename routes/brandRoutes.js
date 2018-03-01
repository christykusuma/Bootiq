const Brand = require('../models/Brand');

module.exports = (app) => {

  // Fetches all brands
  app.get('/api/brands/all', (req,res) => {
    Brand.find((error, brands) => {
      if(error){
        res.send(error);
        console.log("error finding your brands");
      }
      res.json({
        message: "Successfully found your brands database",
        brands: brands
      });
    });
  });

  // Adding brand to database
  app.post('/api/admin/brands/add', (req,res) => {

    // Create a an instance of our Brand model to add new Brands to DB
    const brand = new Brand();
    brand.name = req.body.name;
    brand.image = req.body.image;
    brand.description = req.body.description;

    brand.save((error, brandSaved) => {
      if(error){
        res.send(error);
        console.log("error saving your brand to the database");
      }
      res.json({
        message: "Successfully saved brand to database",
        brandSaved: brandSaved
      });
    });
  });
};