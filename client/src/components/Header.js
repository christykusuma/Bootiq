// Home page
import React, { Component } from 'react'
import { connect } from 'react-redux';

import { 
    fetchBrands,
    fetchCategories 
} from '../actions/index';

import { bindActionCreators } from 'redux';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    // Fetch all the brands
    componentDidMount() {
        this.props.fetchBrands();
        this.props.fetchCategories();
    }

    renderAdminContent() {
        if (this.props.auth.isAdmin) {
            return (
                <div>
                    <a href=""></a>
                </div>
            );
        }
    }

    // Render appropriate header links (sign in/sign out)
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
                    <a href ="/auth/google">Google Login</a>
				</div>
			);
		}
    }
    
    // Render brand names
    renderBrands() {
        return this.props.brands.map((brand) => {
            return (
                <li key={brand._id}>{brand.name}</li>
            );
        });
    }

    // Render category names
    renderCategories() {
        return this.props.categories.map((category) => {
            return (
                <li key={category._id}>{category.name}</li>
            );
        });
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
                                        {this.renderCategories()}
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
                                        {this.renderBrands()}
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
	return { 
        auth: state.auth,
        brands: state.brands,
        categories: state.categories
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchBrands,
        fetchCategories
    }, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Header);