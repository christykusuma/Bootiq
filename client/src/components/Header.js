// Home page
import React, { Component } from 'react'
import { connect } from 'react-redux';

import {
    fetchBrands,
    fetchCategories,
    signoutUser
} from '../actions/index';

import { bindActionCreators } from 'redux';

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }
    // Fetch all the brands
    componentDidMount() {
        this.props.fetchBrands();
        this.props.fetchCategories();
    }

    handleLogout = (event) => {
        this.props.signoutUser();
    }

    // renderAdminContent() {
    //     if (this.props.auth.isAdmin) {
    //         return (
    //             <div>
    //                 <a href="/api/logout"></a>
    //             </div>
    //         );
    //     }
    // }
    // renderLinksLocal() {
    //     if(this.props.auth) {
    //         <div>
    //             <a href ="/logout">Logout</a>
    //         </div>
    //     } else {
    //         return (
	// 			<div>
	// 				<a href ="/login">Register/Login</a>
    //                 <a href ="/auth/google">Google Login</a>
	// 			</div>
	// 		);
    //     }
    // }

    // Render appropriate header links (sign in/sign out)
	renderContent() {
		if (this.props.auth) {
            console.log(this.props.auth);
			return (
				<div>
                    <a href="/" onClick={this.handleLogout}>Logout</a>
					{/* <a href="/api/logout">Google Logout</a> */}
				</div>
			);
		} else {
			return (
				<div>
					<a href="/login">Register/Login</a>
                    {/* <a href="/auth/google">Google Login</a> */}
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
                <div className="header">
                    <div className="header__top--contact">
                        <li>
                            <ul>Status Order</ul>
                            <ul>Tlp: 0318420015</ul>
                            <ul>SMS/WA: 6287755909666</ul>
                            <ul>Line: bootiq </ul>
                            <ul>order@bootiq.co.id</ul>
                        </li>
                    </div>
                    <div className="header__top--nav">
                        <li>
                            <ul>{this.renderContent()}</ul>
                            <ul>+Wishlist</ul>
                            <ul><a href="/shoppingcart">My Bag (0 Items)</a></ul>
                        </li>
                    </div>
                    <div className="header__logo">
                        <a href="/"><img src="logo.png" alt="pic"/></a>
                    </div>
                    <div className="header__bottom--nav">
                        <li>
                            <ul className="dropdown">
                                <div className="dropdown-content--catname">Shop By Categories</div>
                                <div className="dropdown-content--catname--hover">Shop By Categories</div>
                                <div className="dropdown-content--catbox">
                                </div>
                                <div className="dropdown-content--categories">
                                    <ul className="category">
                                        {this.renderCategories()}
                                    </ul>
                                </div>
                            </ul>
                            <ul className="dropdown">
                                <div className="dropdown-content--brandname">Shop By Brands</div>
                                <div className="dropdown-content--brandname--hover">Shop By Brands</div>
                                <div className="dropdown-content--brandbox">
                                </div>
                                <div className="dropdown-content--brands">
                                    <ul className="category">
                                        {this.renderBrands()}
                                    </ul>
                                </div>
                            </ul>
                            <ul className="dropdown"><a href="/favorites">Favorites</a></ul>
                            <ul className="dropdown"><a href="/sale">Sale</a></ul>
                            <ul className="dropdown"><a href="/shop-all">Shop All</a></ul>
                        </li>
                        <div className="search-bar">
                            <input type="text" placeholder="Search.."/>
                            <i className="fa fa-search" aria-hidden="true"></i>
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
        categories: state.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchBrands,
        fetchCategories,
        signoutUser,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
