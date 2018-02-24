const Cart = require('../models/Cart');

// const requireLogin = require('../config/middlewares/requireLogin');

module.exports = (app) => {
    app.post('/api/shoppingcart/add', (req,res) => {

        // const cart = new Cart();
    
        // cart.product_id = req.body._id;
        // cart.user_id = req.user.id;

        const cart = new Cart({
            _product: req.body._id,
            _user: req.user.id
        });
    
        cart.save((error, cartSaved) => {
            if(error){
                res.send(error);
                console.log("error saving your cart to the database");
            }
        
            res.json({
                message: "Successfully saved cart to database",
                cartSaved: cartSaved
            });
        })
    })
}


