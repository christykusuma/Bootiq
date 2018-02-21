import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchProducts
} from "../actions/index";

import { bindActionCreators } from 'redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return this.props.products.map((product) => {
            return (
                <div className="product" key={product.name}>
                    <img src="product-1.jpg" alt="product-img"/>
                    <div class="product-description">
                        <span class="product-brand">Make Up Store</span><br/>
                        {product.name}<br/>
                        Rosso Asiago<br/>
                        {product.price}
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div>
                {this.renderProducts()}
            </div> 
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchProducts
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);