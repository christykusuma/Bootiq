import React, { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

import '../css/app.css';

// import Header from './Header';
// import Explore from './Explore';
// import Landing from './Landing';
// import Activities from './Activities';
// import MarkerSearch from './MarkerSearch';

// Holds all the other components
class App extends Component {

	render () {
		return ( 
            <div>
                <body>
                    <div class="header">
                        <div class="header__top--contact">
                            <li>
                                <ul>Status Order</ul>
                                <ul>Tlp: 0318420015</ul>
                                <ul>SMS/WA: 6287755909666</ul>
                                <ul>Line: bootiq </ul>
                                <ul>order@bootiq.co.id</ul>
                            </li>
                        </div>
                        <div class="header__top--nav">
                            <li>
                                <ul>Register/Login</ul>
                                <ul>+Wishlist</ul>
                                <ul>My Bag (0 Items)</ul>
                            </li>
                        </div>
                        <div class="header__logo">
                            <img src="logo.png"/>
                        </div>
                        <div class="header__bottom--nav">
                            <li>
                                <ul class="dropdown">
                                    <div class="dropdown-content--catname">Shop By Categories</div>
                                    <div class="dropdown-content--catname--hover">Shop By Categories</div>
                                    <div class="dropdown-content--catbox">
                                    </div>
                                    <div class="dropdown-content--categories">
                                        <div class="category">
                                            Skincare<br/>
                                            Cleaners
                                            Refresher
                                            Protection 
                                            Energizer
                                            Correction
                                            Anti Aging

                                            Makeup
                                            Foundation 
                                            Powder
                                            Eye Shadow
                                            Lipstick

                                            Hair
                                            Hair Treatment
                                        </div>
                                    </div>
                                </ul>
                                <ul class="dropdown">
                                    <div class="dropdown-content--brandname">Shop By Brands</div>
                                    <div class="dropdown-content--brandname--hover">Shop By Brands</div>
                                    <div class="dropdown-content--brandbox">
                                    </div>
                                    <div class="dropdown-content--brands">
                                        <p>Menu items...</p>
                                    </div>
                                </ul>
                                <ul class="dropdown">Favorites</ul>
                                <ul class="dropdown">Sale</ul>
                                <ul class="dropdown">Shop All</ul>
                            </li>
                            <div class="search-bar">
                                <input type="text" placeholder="Search.."/>
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>

                    <div class="landing">
                        <div class="landing__ads">
                            <img src="Banner-Malvava.jpg"/>
                        </div>      
                        <div class="landing__just-arrived">
                            <h3>Just Arrived</h3>
                            <div class="landing__just-arrived--products">
                                <div class="product">
                                    <img src="product-1.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">Make Up Store</span><br/>
                                        Marble Microshadow - Rosso Asiago<br/>
                                        Rp 290,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-2.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">X-pert</span><br/>
                                        Glitter Powder<br/>
                                        Rp 30,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-3.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Glitter Gel - Fresh Green<br/>
                                        Rp 78,500
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-4.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Color Collection No.01<br/>
                                        Rp 120,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-5.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Age Defiance Moisturizing Cleansing Foam<br/>
                                        Rp 125,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-6.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">La Tulipe</span><br/>
                                        Eye Brow Pencil - Brown<br/>
                                        Rp 52,500
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="landing__brands">

                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">Make Up Store</h3>
                                <img src="make-up-store.jpg"/>
                            </div>
                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">X-pert</h3>
                                <img src="x-pert.jpg"/>
                            </div>
                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">La Tulipe</h3>
                                <img src="la-tulipe.jpg"/>
                            </div>
                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">LT Pro</h3>
                                <img src="LT-pro.jpg"/>
                            </div>
                        </div>

                        <div class="landing__just-arrived">
                            <h3>Best Sellers</h3>
                            <div class="landing__just-arrived--products">
                                <div class="product">
                                    <img src="product-1.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">Make Up Store</span><br/>
                                        Marble Microshadow - Rosso Asiago<br/>
                                        Rp 290,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-2.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">X-pert</span><br/>
                                        Glitter Powder<br/>
                                        Rp 30,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-3.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Glitter Gel - Fresh Green<br/>
                                        Rp 78,500
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-4.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Color Collection No.01<br/>
                                        Rp 120,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-5.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Age Defiance Moisturizing Cleansing Foam<br/>
                                        Rp 125,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-6.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">La Tulipe</span><br/>
                                        Eye Brow Pencil - Brown<br/>
                                        Rp 52,500
                                    </div>
                                </div>
                            </div>
                            <div class="landing__article">
                                <img src="blog.jpg"/>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
		);
	}
};

export default App;



