// Product page
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { searchProduct, fetchUser } from '../actions/index';
import { bindActionCreators } from 'redux';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.searchProduct(this.props.match.params.id);
    }

    // handleFormSubmit( { product, quantity } ) {
    //     const user = this.props.user;
    //     this.props.submitCartProduct({ user, product, quantity });   
    // }
    
    render() { 
        // const { handleSubmit, fields: { product, quantity }} = this.props;
        return (
            <div className="product">
                <div className="product__photos">
                    <img src="product-1.jpg" alt="product-img"/>
                </div>
                {/* <form className="product__details" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}> */}
                <div>
                   <span className="product__details--brand">{this.props.search.brand}</span>
                   {this.props.search.name}<br/>
                   COLOR: {this.props.search.color}<br/>
                   Rp. {this.props.search.price}<br/>
                    <div className="product__add">
                        <div className="product__add--quantity">
                            {/* <Field name="quantity" component="select">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                                <option value="1">6</option>
                                <option value="1">7</option>
                                <option value="1">8</option>
                                <option value="1">9</option>
                                <option value="1">10</option>
                            </Field> */}
                        </div>
                        <button type="submit" className="product__add--basket">
                           Add to bag
                        </button>
                    </div>
                </div>
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
        fetchUser
    }, dispatch);
}
    
// export default connect(mapStateToProps, mapDispatchToProps)(Product);

// Product = reduxForm({
//     form: "product",
//     fields:  ['product', 'quantity']
// }) (Product);


export default connect(mapStateToProps, mapDispatchToProps)(Product);
