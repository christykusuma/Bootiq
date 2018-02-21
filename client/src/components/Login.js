// Login page
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
    
    handleFormSubmit = ({ email, password }) => {
        this.props.signinUser({ email, password })
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
                    <form className="login__form" onSubmit={handleSubmit(this.handleFormSubmit)}>
                            <label>Email Address</label>
                            <Field name="email" 
                                   component={renderInput} 
                                   type="email" 
                            />
                            <label>Password</label>
                            <Field name="password" 
                                   component={renderInput} 
                                   type="password" 
                            />
                            {/* <div className="remember-me">
                                <input type="checkbox"/>
                                <label>Remember Me</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Sign In</button>
                            {/* <a className="forget-password" href="#">Forgot account?</a> */}
                    </form>
                    </div>
                </div>
            );
        }
};






const form = reduxForm({ 
    form: 'signin',
    fields: ['email', 'password'] 
})(Login)

export default connect(null, actions)(form)