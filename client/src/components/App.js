import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../css/app.css';

import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import ShopAll from './ShopAll';
import Favorites from './Favorites';
import Login from './Login';
import SignUp from './SignUp';
import Sale from './Sale';
import Cart from './Cart';
import Product from './Product';

// Holds all the other components
class App extends Component {
  
	render () {
		return ( 
			<BrowserRouter>
				<div>
          <Header/>
					<Route exact path="/" component={Landing} />
					<Route exact path="/shop-all" component={ShopAll} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
          <Route exact path="/shoppingcart" component={Cart} />
					<Route exact path="/sale" component={Sale} />
          <Route exact path="/:id" component={Product} />
					<Route exact path="/favorites" component={Favorites} />
          <Route exact path="/brand/create" component={Landing} />
          <Route exact path="/brand/x-pert" component={Landing} />
          <Route exact path="/brand/la-tulipe" component={Landing} />
          <Route exact path="/brand/lt-pro" component={Landing} />
          <Route exact path="/brand/lt-men" component={Landing} />
          <Route exact path="/brand/sdm" component={Landing} />
          <Route exact path="/brand/make-up-store" component={Landing} />
          <Route exact path="/category/create" component={Landing} />
          <Route exact path="/category/makeup" component={Landing} />
          <Route exact path="/category/skincare" component={Landing} />
          <Route exact path="/category/haircare" component={Landing} />
          <Route exact path="/category/accessories" component={Landing} />
          <Route exact path="/category/men" component={Landing} />
          <Route exact path="/products/create" component={Landing} />
          <Footer />
				</div>
			</BrowserRouter>
		);
	}
};
export default connect(null, actions)(App);




