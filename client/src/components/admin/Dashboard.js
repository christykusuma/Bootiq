// Dashboard page
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    fetchBrands,
    fetchCategories 
} from '../../actions/index';

import ProductList from '../ProductList';

import { bindActionCreators } from 'redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    // Fetch all the brands
    componentDidMount() {
        this.props.fetchBrands();
    }

    // Render brand names
    renderBrands() {
        return this.props.brands.map((brand) => {
            return (
                <span key={brand._id}>
                    <input type="checkbox"/>
                    <label>{brand.name}</label><br/>
                </span>
            );
        });
    }
    
    render () {
        console.log('HELLOW', this.props.auth);
        return ( 
            <div className="dashboard">
                <div className="filter">
                    <div className="filter__makeup">
                        <h3 className="filter__makeup--title">
                            Subcategories
                            <a href="/create-subcategory"><button className="create-subcategory--button">+</button></a>
                        </h3>
                        <form className="filter__makeup--categories">
                            <input type="checkbox"/><label>Face</label><br/>
                            <input type="checkbox"/><label>Lips</label><br/>
                            <input type="checkbox"/><label>Brushes</label><br/>
                            <input type="checkbox"/><label>Brows</label><br/>
                            <input type="checkbox"/><label>Makeup Remover</label><br/>
                            <input type="checkbox"/><label>Palettes and Sets</label><br/>
                            <input type="checkbox"/><label>Eyes</label><br/>
                            <input type="checkbox"/><label>Tools</label><br/>
                            <input type="checkbox"/><label>Lashes</label>
                        </form>            
                    </div>
                    <div className="filter__brand">
                        <h3 className="filter__brand--title">
                            Brand
                            <a href="/create-brand"><button className="create-brand--button">+</button></a>
                        </h3>
                        <div className="filter__brand--searchbar"></div>
                        <form className="filter__brand--categories">
                            {this.renderBrands()}
                        </form>
                    </div>
                    <div className="filter__price">
                        <h3 className="filter__price--title">Price</h3>
                        <form className="filter__price--categories">
                            <input type="radio"/><label>All Price</label><br/>
                            <input type="radio"/><label>Sale</label>
                        </form>
                    </div>
                </div>
                <div className="products-gallery">
                    <div className="search-bar">
                        <input type="text" placeholder="Search.."/>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <a href="/create-product"><button className="create-product--button">Create New Product</button></a>
                    <ProductList
                        mode = 'dashboard'
                    />
                </div>
                <div className="analytics">
                    <div className="analytics__bestsellers">
                        <h3 className="analytics__bestsellers--title">
                            Bestsellers List
                        </h3>
                        <ol className="analytics__bestsellers--details">    
                            <li>Marble Microshadow by Make Up Store</li>
                            <li>Glitter Powder by X-pert</li>
                            <li>Eye Glitter Gel by LT Pro</li>
                            <li>Eye Brow Pencil by La Tulipe</li>
                        </ol>
                    </div>
                    <div className="analytics__newarrivals">
                        <h3 className="analytics__bestsellers--title">
                            New Arrivals List
                        </h3>
                        <ol className="analytics__newarrivals--details">    
                            <li>Marble Microshadow by Make Up Store</li>
                            <li>Glitter Powder by X-pert</li>
                            <li>Eye Glitter Gel by LT Pro</li>
                            <li>Eye Brow Pencil by La Tulipe</li>
                        </ol>
                    </div>
                    <div className="analytics__blogposts">
                        <h3 className="analytics__blogposts--title">
                            Recent Blog Posts
                        </h3>
                        <ul className="analytics__blogposts--details">    
                            <li>Marble Microshadow by Make Up Store</li>
                            <li>Glitter Powder by X-pert</li>
                            <li>Eye Glitter Gel by LT Pro</li>
                            <li>Eye Brow Pencil by La Tulipe</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
	return { 
        brands: state.brands,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchBrands
    }, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);