// Product list for sales page
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    submitCartProduct,
    fetchProducts,
    fetchUser
} from "../actions/index";

import { bindActionCreators } from 'redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchUser();
    }

    renderProducts() {
        console.log('BLUE', this.props.user);
        const user = this.props.user;
        return this.props.products.map((product) => {
            return (
                <div className="product" key={product._id}>
                    {this.props.mode === 'dashboard' 
                    ?
                        <div>
                        <img src="product-1.jpg" alt="product-img"/>
                        <div className="product-description">
                            <span className="product-brand">Brand: {product.brand}</span><br/>
                            Name: {product.name}<br/>
                            Type: {product.color}<br/>
                            Price: Rp. {product.price}
                        </div>
                        </div>
                    :
                        <div>
                        <img src="product-1.jpg" alt="product-img"/>
                        <div className="product-description">
                            <span className="product-brand">{product.brand}</span><br/>
                            {product.name}<br/>
                            {product.color}<br/>
                            {product.price}
                        </div>
                        {/* <button className="product-add" onClick={() => this.props.submitCartProduct(product, user)}>
                            Add to cart
                        </button> */}
                        <button className="product-add">
                            <a href={`products/${product._id}`}>SEARCH</a>
                        </button>
                        </div>
                    }
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
        products: state.products,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        submitCartProduct,
        fetchProducts,
        fetchUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);