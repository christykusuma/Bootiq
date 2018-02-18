const Category = require('../models/Category');

module.exports = (app) => {

//----- RETRIEVE ALL CATEGORIES FROM DATABASE --------//

  // Grabs all of our category information
  app.get('/api/categories/all', (req,res) => {
    Category.find((error, categories) => {
      if(error){
        res.send(error);
        console.log("error finding your categories");
      }

      res.json({
          message: "Successfully found your categories database",  
          categories: categories
        });
    });
  });


//----- POST CATEGORIES TO  DATABASE --------//

app.post('/api/admin/categories/add', (req,res) => {

  // Create a an instance of our Category model to add new Category to DB

  const category = new Category();

  category.name = req.body.name;

  category.save((error, categorySaved) => {
    if(error){
      res.send(error);
      console.log("error saving your category to the database");
    }

    res.json({
        message: "Successfully saved category to database",
        categorySaved: categorySaved
    });
  })
})


}