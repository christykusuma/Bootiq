const Cart = require('../models/Cart');
const User = require('../models/User');
const Product = require('../models/Product');
var mongoose = require('mongoose');

// const requireLogin = require('../config/middlewares/requireLogin');

module.exports = (app) => {

    // Adding a product to shopping cart
    app.post('/api/shoppingcart/add', (req,res) => {

        console.log('read me too', req.body._id);
        // User.findById( req.body.user, (err, user) => {
            
        // });
        // const product = await Product.findById({ req.body._id });

        const cart = new Cart( 
            _product: undefined,
            quantity: 2 
        );

        cart.save()
            .then(() => User.findById( req.body.user ))
            .then((user) => {
                user._carts.push(cart);
                return user.save();
            })
            .then(() => Product.findById({ req.body._id }))
            .then((product) => {
                cart._product.push(product);
                return cart.save();
            });

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
