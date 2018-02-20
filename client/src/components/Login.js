// Login page
import React, { Component } from 'react'

class Login extends Component {
    
        render () {
            return ( 
                <div className="register container-fluid">
                    <div className="login-pic">
                        <img className="login-pic" src="register.jpg"/>
                    </div>
                    <div className="login">
                        <h3><span className="current-register">Login</span> or <a className="other-register" href="/signup">Sign Up</a></h3>
                        <form class="login__form">
                            <label>Email Address</label>
                            <input type="text"/>
                            <label>Password</label>
                            <input type="password"/>
                            <div className="remember-me">
                                <input type="checkbox"/>
                                <label>Remember Me</label>
                            </div>
                            <input type="submit" value="Log In"/>
                            {/* <a className="forget-password" href="#">Forgot account?</a> */}
                        </form>
                    </div>
                </div>
            );
        }
    };
    
export default Login;