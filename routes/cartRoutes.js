const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');
var mongoose = require('mongoose');

// const requireLogin = require('../config/middlewares/requireLogin');

module.exports = (app) => {

    // Adding a product to shopping cart
    app.post('/api/shoppingcart/add', (req,res) => {

        console.log('read me too', req.body._id);

        const cart = new Cart(); 
        cart._product = {};
        cart.quantity = req.body.quantity;

        // Find the product
        Product.findById( req.body._id )
        // Insert product in new cart
        .then((product) => {
            console.log('PRODUCT READ ME', product);
            cart._product = product;
        })
        // Save the cart
        .then(() => cart.save())
        // Find the user
        .then(() => User.findById( req.body.user ))
        // Push cart into user model
        .then((user) => {
            user._carts.push(cart);
            return user.save();
        });
    });  

    // // Fetching all products from shopping cart
    // app.post('/api/shoppingcart/all', (req,res) => {

    //     const user = User.findById( req.body.user );

    //     console.log('CHRISTY READ ME, USER INFO', user);
        
    //     // const user = 

    // });

    // // Deleting a product from shopping cart
    // app.post('/api/shoppingcart/delete', (req,res) => {
        
    //     // Finding user id and pushing product into shopping cart
    //     User.findById({ req.user.id })
    //     .then((user) => {
    //         const product = user.cart.find({ _product: req.body._id });
    //         product.remove();
    //         return user.save(
    //             (error, cartSaved) => {
    //                 if(error){
    //                     res.send(error);
    //                     console.log("error saving your cart to the database");
    //                 }
                
    //                 res.json({
    //                     message: "Successfully saved cart to database",
    //                     cartSaved: cartSaved
    //                 });
    //             );
    //     })      
    // });
}
