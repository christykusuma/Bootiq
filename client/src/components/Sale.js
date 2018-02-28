// Sale page
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    fetchBrands,
    fetchCategories 
} from '../actions/index';

import ProductList from './Product-list';

import { bindActionCreators } from 'redux';

class Sale extends Component {
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
        return ( 
            <div className="shop-all">
                <div className="filter">
                    <div className="filter__makeup">
                        <h3 className="filter__makeup--title">Makeup</h3>
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
                        <h3 className="filter__brand--title">Brand</h3>
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
                    <ProductList/>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
	return { 
        brands: state.brands
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchBrands
    }, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(Sale);