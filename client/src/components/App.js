import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../css/app.css';

import Header from './Header';
import Landing from './Landing';

// Holds all the other components
class App extends Component {

	render () {
		return ( 
			<BrowserRouter>
				<div>
                    <Header/>
					<Route exact path="/" component={Landing} />
				</div>
			</BrowserRouter>
		);
	}
};

// export default connect(null, actions)(App);
export default App;




