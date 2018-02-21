const Subcategory = require('../models/Subcategory');

module.exports = (app) => {

//----- RETRIEVE ALL SUBCATEGORIES FROM DATABASE --------//

  // Grabs all of our category information
  app.get('/api/subcategories/all', (req,res) => {
    Subcategory.find((error, subcategories) => {
      if(error){
        res.send(error);
        console.log("error finding your subcategories");
      }

      res.json({
          message: "Successfully found your subcategories database",  
          subcategories: subcategories
        });
    });
  });


//----- POST SUBCATEGORIES TO  DATABASE --------//

app.post('/api/admin/subcategories/add', (req,res) => {

  // Create a an instance of our Subcategory model to add new Subcategory to DB

  const subcategory = new Subcategory();

  subcategory.name = req.body.name;

  subcategory.save((error, subcategorySaved) => {
    if(error){
      res.send(error);
      console.log("error saving your subcategory to the database");
    }

    res.json({
        message: "Successfully saved subcategory to database",
        subcategorySaved: subcategorySaved
    });
  })
})


}