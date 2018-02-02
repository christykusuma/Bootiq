import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../css/app.css';

import Header from './Header';
import Landing from './Landing';
import ShopAll from './ShopAll';
import Favorites from './Favorites';
import Login from './Login';
import SignUp from './SignUp';
import Sale from './Sale';

// Holds all the other components
class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render () {
		return ( 
			<BrowserRouter>
				<div>
                    <Header/>
					<Route exact path="/" component={Landing} />
					<Route exact path="/shop-all" component={ShopAll} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/sale" component={Sale} />
					<Route exact path="/favorites" component={Favorites} />
                    <Route exact path="/brand/x-pert" component={Landing} />
                    <Route exact path="/brand/la-tulipe" component={Landing} />
                    <Route exact path="/brand/lt-pro" component={Landing} />
                    <Route exact path="/brand/lt-men" component={Landing} />
                    <Route exact path="/brand/sdm" component={Landing} />
                    <Route exact path="/brand/make-up-store" component={Landing} />
                    <Route exact path="/category/" component={Landing} />
				</div>
			</BrowserRouter>
		);
	}
};

export default connect(null, actions)(App);




