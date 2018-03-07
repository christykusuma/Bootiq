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

class CreateSubcategory extends Component {

    handleFormSubmit( {  name } ) {
        this.props.createSubcategory({ name });   
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
                <img className="create-subcategory__pic" src="register.jpg"/>
                <div className="create-subcategory">
                    <h3>Create Subcategory</h3>
                    <form className="create-subcategory__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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

CreateSubcategory = reduxForm({
    form: "createsubcategory",
    fields:  ['name']
}) (CreateSubcategory)


export default connect(null, actions)(CreateSubcategory)