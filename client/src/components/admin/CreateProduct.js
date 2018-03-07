import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class CreateProduct extends Component {

    handleFormSubmit( {  name, color, price, brand } ) {
        this.props.createProduct({ name, color, price, brand });   
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong> Oops! </strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render () {
        const { handleSubmit, fields: { name, color, price, brand }} = this.props;

        return ( 
            <div className="create container-fluid">
                <img className="create-product__pic" src="register.jpg"/>
                <div className="create-product">
                    <h3>Create Product</h3>
                    <form className="create-product__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <span>
                            <label>Name</label>
                            <Field name="name" 
                                    component={renderInput} 
                                    type="text" 
                            />
                        </span>
                        <span>
                            <label>Color</label>
                            <Field name="color" 
                                    component={renderInput} 
                                    type="text" 
                            />
                        </span>
                        <span>
                            <label>Price</label>
                            <Field name="price" 
                                    component={renderInput} 
                                    type="number" 
                            />
                        </span>
                        <span>
                            <label>Brand</label>
                            <Field name="brand" 
                                    component={renderInput} 
                                    type="text" 
                            />
                        </span>
                       <button type="submit">Submit</button>
                     </form>
                    </div>
                </div>
            );
        }
};

CreateProduct = reduxForm({
    form: "createproduct",
    fields:  ['name', 'color', 'price', 'brand']
}) (CreateProduct)


export default connect(null, actions)(CreateProduct)