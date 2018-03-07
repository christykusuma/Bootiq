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

class CreateBrand extends Component {

    handleFormSubmit( {  name } ) {
        this.props.createBrand({ name });   
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
        const { handleSubmit, fields: { name }} = this.props;

        return ( 
            <div className="create container-fluid">
                <img className="create-brand__pic" src="register.jpg"/>
                <div className="create-brand">
                    <h3>Create Brand</h3>
                    <form className="create-brand__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <span>
                            <label>Name</label>
                            <Field name="name" 
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

CreateBrand = reduxForm({
    form: "createbrand",
    fields:  ['name']
}) (CreateBrand)


export default connect(null, actions)(CreateBrand)