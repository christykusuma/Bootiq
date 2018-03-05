// Product page
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { searchProduct, fetchUser, submitCartProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.searchProduct(this.props.match.params.id);
    }

    handleFormSubmit({ quantity }) {
        const user = this.props.user;
        const product = this.props.search;
        this.props.submitCartProduct( product, user, quantity );   
    }
    
    render() { 
        const { handleSubmit, fields: { quantity }} = this.props;
        return (
            <div className="product">
                <div className="product__photos">
                    <img src="product-1.jpg" alt="product-img"/>
                </div>
                <form className="product__details" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                   <span className="product__details--brand">{this.props.search.brand}</span>
                   {this.props.search.name}<br/>
                   COLOR: {this.props.search.color}<br/>
                   Rp. {this.props.search.price}<br/>
                    <div className="product__add">
                        <div className="product__add--quantity">
                            <Field name="quantity" component="select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </Field>
                        </div>
                        <button type="submit" className="product__add--basket">
                           Add to bag
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        search: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchProduct,
        fetchUser,
        submitCartProduct
    }, dispatch);
}
    
Product = reduxForm({
    form: "product",
    fields:  ['quantity']
}) (Product);

export default connect(mapStateToProps, mapDispatchToProps)(Product);
