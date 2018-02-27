import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';


const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Login extends Component {
    
    handleFormSubmit( { email, password } ) {
        // Need to do something to log user in
        this.props.signinUser ( { email, password });   
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
        const { handleSubmit, fields: {email, password }} = this.props;

        return ( 
            <div className="register container-fluid">
                <div className="login-pic">
                    <img className="login-pic" src="register.jpg"/>
                </div>
                <div className="login">
                    <h3><span className="current-register">Login</span> or <a className="other-register" href="/signup">Sign Up</a></h3>
                    <form className="login__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                            <label>Email Address</label>
                            <Field name="email" 
                                   component={renderInput} 
                                   type="text" 
                            />
                            <label>Password</label>
                            <Field name="password" 
                                   component={renderInput} 
                                   type="password" 
                            />
                            <button type="submit" className="btn btn-primary">Sign In</button>
                     </form>
                    </div>
                </div>
            );
        }
};





Login = reduxForm({
    form: "login",
    fields:  ['email', 'password']
}) (Login)


export default connect(null, actions)(Login)