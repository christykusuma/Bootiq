// Shopping cart page
import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchUser, fetchLocalCartProducts, deleteLocalCartProduct } from '../actions/index';
import { bindActionCreators } from 'redux';

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchLocalCartProducts();
    }

    handleFormSubmit({ quantity }) {
        // const user = this.props.user;
        // const product = this.props.search;
        // this.props.submitCartProduct( product, user, quantity );   
    }

    renderItems() {
        console.log('CARTS LOADING...', this.props.carts);
        return this.props.carts.map((cart) => {
            return (
                <div className="cart__basket--item" key={cart._id}>
                    <img className="cart__basket--item-photo" src="product-1.jpg" alt="product-img"/>
                    <div className="cart__basket--item-details">
                        <strong>{cart._product.brand}</strong> <br/>
                        {cart._product.name}<br/>
                        Color: {cart._product.color} <br/>
                        <button className="cart__basket--item-delete" onClick={() => this.props.deleteLocalCartProduct(cart._id)}>Delete</button>
                        <div className="cart__basket--item-quantity">
                            <Field name="quantity" component="select">
                                <option value={cart.quantity}>{cart.quantity}</option>
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
                        <div className="cart__basket--item-price">
                            <strong>Rp. {cart._product.price * cart.quantity}</strong>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const { handleSubmit, fields: { quantity }} = this.props;
        return (
            <form className="cart container-fluid" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div className="cart__basket">
                    <h3>Items in basket ({this.props.carts.length})</h3>
                    <div className="cart__basket--items">
                        {this.renderItems()}
                    </div>
                </div>
                <div className="cart__payment">
                    <h4>Order summary</h4>
                    <table>
                        <tr>
                            <td>
                                Merchandise subtotal
                            </td>
                            <td>
                                Rp. 31,000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shipping and Handling
                            </td>
                            <td>
                                TBD
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Tax
                            </td>
                            <td>
                                TBD
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Estimated total
                            </td>
                            <td>
                                $31.00
                            </td>
                        </tr>
                    </table>
                    <button>Checkout</button>
                </div>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        carts: state.carts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchLocalCartProducts,
        deleteLocalCartProduct,
        fetchUser
    }, dispatch);
}

Cart = reduxForm ({
    form: "Cart",
    fields: [ 'quantity' ]
}) (Cart);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);