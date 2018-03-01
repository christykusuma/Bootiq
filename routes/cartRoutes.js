const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');
var mongoose = require('mongoose');

// const requireLogin = require('../config/middlewares/requireLogin');

module.exports = (app) => {

    // Adding a product to shopping cart
    app.post('/api/shoppingcart/add', (req,res) => {
        // const user = User.findById({ req.user.id });
        // const cart = new Cart( 
        //     _product: Product.findById({ req.body._id }),
        //     quantity: 2 
        // );

        // user._carts.push(cart);

        // Promise.all([user.save(), cart.save()])
        //     .then((error, cartSaved) => {
        //         if(error){
        //             res.send(error);
        //             console.log("error saving your cart to the database");
        //         }
            
        //         res.json({
        //             message: "Successfully saved cart to database",
        //             cartSaved: cartSaved
        //         });
        // })
    });


        // const cart = new Cart({
        //     // _product: req.body._id,
        //     // _user: req.user.id
        //     _product: mongoose.Types.ObjectId('5a8cc6c21728023cb8628c40'),
        //     _user: mongoose.Types.ObjectId('5a94febf7f4b4c19fb18ab1d'),
        //     name: 'name'
        // });
    
        // cart.save((error, cartSaved) => {
        //     if(error){
        //         res.send(error);
        //         console.log("error saving your cart to the database");
        //     } 
        
        //     res.json({
        //         message: "Successfully saved cart to database",
        //         cartSaved: cartSaved
        //     });
        // })

        // Finding user id and pushing product into shopping cart
        // User.findById({ req.user.id })
        // .then((user) => {
        //     user.cart.push({ 
        //         _product: req.body._id,
        //         quantity: 2
        //     });
        //     return user.save(
        //         (error, cartSaved) => {
        //             if(error){
        //                 res.send(error);
        //                 console.log("error saving your cart to the database");
        //             }
                
        //             res.json({
        //                 message: "Successfully saved cart to database",
        //                 cartSaved: cartSaved
        //             });
        //     });
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

    // Fetching all products from shopping cart
    app.get('/api/shoppingcart/all', (req,res) => {
    //    const product_ids = Cart.find({ _user: mongoose.Types.ObjectId('5a94febf7f4b4c19fb18ab1d') });
        // var id = mongoose.Types.ObjectId('5a975d397c10b859a361360c');    
        // User.findById({ req.user.id })
        // .then((user) => {
        //     user.cart.push({ _product: })
        // })

    });
}
