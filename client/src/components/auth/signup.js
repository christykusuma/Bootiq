import React, { Component } from 'react';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const renderInput = ({ label, type, ...field, meta: {touched, error, warning}}) => {
    return (
        <fieldset>
            <label>{label}:</label>
            <input {...field.input} type={type} className="form-control" />
            {touched && error && <span className="error">{error}</span>}
        </fieldset>
    );
}

class Signup extends Component {
    handleFormSubmit = values => {
        this.props.signupUser({ 
            email: values.email, 
            password: values.password,
            passwordConfirm: values.passwordConfirm
        });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div>
                  <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                {/* Email */}
                <Field name="email" component={renderInput} type="text" label="Email" />
                {/* Password */}
                <Field name="password" type="password" component={renderInput} label="Password" /> 
                {/* Confirm Password */}
                <Field name="passwordConfirm" type="password" component={renderInput} label="Confirm Password" />
                {this.renderAlert()}
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

// Validate password matching
function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm='Please enter a password confirmation';
    }

    if (formProps.password != formProps.passwordConfirm) {
        errors.password = 'Passwords must match!';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const form = reduxForm({ form: 'signup', validate })(Signup);

export default connect(mapStateToProps, actions)(form);