// Shop all page
import React, { Component } from 'react'

class Login extends Component {
    
        render () {
            return ( 
                <div className="register">
                    <div className="login">
                        <h3>Login</h3>
                        <form class="login__form">
                            <label>Email Address</label>
                            <input type="text"/>
                            <label>Password</label>
                            <input type="password"/>
                            <input type="checkbox"/><label class="remember-me">Remember Me</label>
                            <input type="submit" value="Login"/>
                            <a href="#">Forgot Password?</a>
                        </form>
                    </div>
                    <div className="signup">
                        <h3>Sign Up</h3>
                        <form class="signup__form">
                            <label>First Name</label>
                            <input type="text"/>
                            <label>Last Name</label>
                            <input type="text"/>
                            <label>Email</label>
                            <input type="text"/>
                            <label>Password</label>
                            <input type="password"/>
                            <label>Date of Birth</label>
                            <select name="month">
                                <option value="jan">January</option>
                                <option value="feb">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                            <select name="day">
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
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select name="year">
                                <option value="2018">2018</option>
                            </select>
                            <label>Phone Number</label>
                            <input type="text"/>
                            <label>Country</label>
                            <input type="text"/>
                            <label>City</label>
                            <input type="text"/>


                            <input type="submit" value="Sign Up"/>
                        </form>
                    </div>
                </div>
            );
        }
    };
    
export default Login;