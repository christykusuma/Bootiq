// Home page
import React, { Component } from 'react'
import { connect } from 'react-redux';

import '../css/app.css';

class Header extends Component {
	renderContent() {
		if (this.props.auth) {
			return (
				<div>
					<a href ="/api/logout">Logout</a>
				</div>
			);
		} else {
			return (
				<div>
					<a href ="/auth/google">Register/Login</a>
				</div>
			);
		}
	}
    
        render () {
            return ( 
                <div>
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
                                <ul>{this.renderContent()}</ul>
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
                </div>
            );
        }
    };
    
function mapStateToProps(state) {
	return { auth: state.auth };
}
    
export default connect(mapStateToProps)(Header);