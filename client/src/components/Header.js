// Home page
import React, { Component } from 'react'
import { connect } from 'react-redux';

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
					<a href ="/login">Register/Login</a>
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
                            <a href="/"><img src="logo.png"/></a>
                        </div>
                        <div class="header__bottom--nav">
                            <li>
                                <ul class="dropdown">
                                    <div class="dropdown-content--catname">Shop By Categories</div>
                                    <div class="dropdown-content--catname--hover">Shop By Categories</div>
                                    <div class="dropdown-content--catbox">
                                    </div>
                                    <div class="dropdown-content--categories">
                                        <ul class="category">
                                            <li>Makeup</li>
                                            <li>Skin Care</li>
                                            <li>Hair Care</li>
                                            <li>Accessories</li>
                                            <li>Men</li>
                                        </ul>
                                    </div>
                                </ul>
                                <ul class="dropdown">
                                    <div class="dropdown-content--brandname">Shop By Brands</div>
                                    <div class="dropdown-content--brandname--hover">Shop By Brands</div>
                                    <div class="dropdown-content--brandbox">
                                    </div>
                                    <div class="dropdown-content--brands">
                                        <ul class="category">
                                            <li>X-Pert</li>
                                            <li>La Tulipe</li>
                                            <li>LT Pro</li>
                                            <li>LT Men</li>
                                            <li>SDM</li>
                                            <li>Make Up Store</li>
                                        </ul>
                                    </div>
                                </ul>
                                <ul class="dropdown"><a href="/favorites">Favorites</a></ul>
                                <ul class="dropdown"><a href="/sale">Sale</a></ul>
                                <ul class="dropdown"><a href="/shop-all">Shop All</a></ul>
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