// Sign up page:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import * as actions from '../actions';

// FOR DOB FIELD:
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
momentLocaliser(moment);

const renderField = field => {
    const { input, type, meta: { touched, error}  } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
            {touched && ((error && <span className="error">{error}</span>) )}
        </div>
    );
}

// const renderDateTimePicker = ({ input: { onChange, value }, showTime }) =>
//   <DateTimePicker
//     onChange={onChange}
//     format="DD MMM YYYY"
//     time={showTime}
//     value={!value ? null : new Date(value)}
//   />

class SignUp extends Component {
    handleFormSubmit(formProps) {
        // call action creator to sign up the user
        this.props.signupUser(formProps);
    }

    render () {
        const { handleSubmit, fields: {fname, lname, email, password, dob, city, country }} = this.props;
        return (
                <div className="register">
                    <img className="signup-pic" src="register.jpg"/>
                        <div className="signup">
                            <h3><a href="/login" className="other-register">Login</a> or <span className="current-register" href="/signup">Sign Up</span></h3>
                            <form className="signup__form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                                <span>
                                    <label>First Name:</label>
                                    <Field
                                        name="fname"
                                        type="text"
                                        component={renderField}
                                    />
                                </span>
                                <span>
                                    <label>Last Name:</label>
                                    <Field
                                        name="lname"
                                        component={renderField}
                                        type="text"
                                    />
                                </span>
                                <span>
                                    <label>Email:</label>
                                    <Field
                                        name="email"
                                        component={renderField}
                                        type="text"
                                    />
                                </span>
                                <span>
                                    <label>Password:</label>
                                    <Field
                                        name="password"
                                        component={renderField}
                                        type="password"
                                    />
                                </span>
                                {/* <span>
                                    <label>Date of Birth:</label>
                                    <Field
                                        name="dob"
                                        component={MyTextInput}
                                        placeholder={'MM-DD-YYYY'}
                                    />
                                    <Field
                                        name="dob"
                                        showTime={false}
                                        component={renderDateTimePicker}
                                    />
                                </span> */}
                                <span>
                                    <label>City</label>
                                    <Field name="city" component={renderField}  type="text"/>
                                </span>
                                <span>
                                    <label>Country</label>
                                    <Field
                                        name="country"
                                        component={renderField}
                                        type="text"
                                    />
                                </span>
                                <button action="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
            );
        }
    };

SignUp = reduxForm ({
    form: "Signup",
    fields: [ 'fname', 'lname', 'password', 'dob', 'city', 'country']
}) (SignUp);

export default connect(null, actions)(SignUp);
