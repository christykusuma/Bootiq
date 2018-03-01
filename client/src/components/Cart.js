import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Cart extends Component {
    componentDidMount() {
        this.props.fetchCartProducts();
    }

    render() {
        const { fields: { quantity }} = this.props;
        return (
            <form className="cart container-fluid">
                <div className="cart__basket">
                    <h3>Items in basket (2)</h3>
                    <div className="cart__basket--items">
                        <div className="cart__basket--item">
                            <img className="cart__basket--item-photo" src="product-1.jpg" alt="product-img"/>
                            <div className="cart__basket--item-details">
                                <strong>MAKE UP STORE</strong> <br/>
                                Marble Microshadow<br/>
                                Color: Rosso Asiago <br/>
                                <a className="cart__basket--item-delete" href="/">Delete</a>
                                <div className="cart__basket--item-quantity">
                                    <Field name="quantity" component="select">
                                        <option></option>
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
                                    </Field>
                                </div>
                                <div className="cart__basket--item-price">
                                    <strong>$19.00</strong>
                                </div>
                            </div>
                        </div>
                        <div className="cart__basket--item">
                            <img className="cart__basket--item-photo" src="product-1.jpg" alt="product-img"/>
                            <div className="cart__basket--item-details">
                                <strong>MAKE UP STORE</strong> <br/>
                                Marble Microshadow<br/>
                                Color: Rosso Asiago <br/>
                                <a className="cart__basket--item-delete" href="/">Delete</a>
                                <div className="cart__basket--item-quantity">
                                    <Field name="quantity" component="select">
                                        <option></option>
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
                                    </Field>
                                </div>
                                <div className="cart__basket--item-price">
                                    <strong>$19.00</strong>
                                </div>
                            </div>
                        </div>
                        <div className="cart__basket--item">
                            <img className="cart__basket--item-photo" src="product-1.jpg" alt="product-img"/>
                            <div className="cart__basket--item-details">
                                <strong>MAKE UP STORE</strong> <br/>
                                Marble Microshadow<br/>
                                Color: Rosso Asiago <br/>
                                <a className="cart__basket--item-delete" href="/">Delete</a>
                                <div className="cart__basket--item-quantity">
                                    <Field name="quantity" component="select">
                                        <option></option>
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
                                    </Field>
                                </div>
                                <div className="cart__basket--item-price">
                                    <strong>$19.00</strong>
                                </div>
                            </div>
                        </div>
                        <div className="cart__basket--item">
                            <img className="cart__basket--item-photo" src="product-1.jpg" alt="product-img"/>
                            <div className="cart__basket--item-details">
                                <strong>MAKE UP STORE</strong> <br/>
                                Marble Microshadow<br/>
                                Color: Rosso Asiago <br/>
                                <a className="cart__basket--item-delete" href="/">Delete</a>
                                <div className="cart__basket--item-quantity">
                                    <Field name="quantity" component="select">
                                        <option></option>
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
                                    </Field>
                                </div>
                                <div className="cart__basket--item-price">
                                    <strong>$19.00</strong>
                                </div>
                            </div>
                        </div>
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
                                $31.00
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

Cart = reduxForm ({
    form: "Cart",
    fields: [ 'quantity' ]
}) (Cart);

export default connect(null, actions)(Cart);