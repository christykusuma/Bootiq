import React, { Component } from 'react'

class Footer extends Component {
    
        render () {
            return ( 
                <div className="footer container-fluid">
                   <div className="footer__instagram-feed">
                   </div>
                   <div className="footer__subscribe">
                        <form className="footer__subscribe--newsletter">
                            <label>Subscribe to our newsletter</label><br/>
                            <input name="email" type="text" placeholder="Enter your email..."/>
                            <button name="submit" type="submit">></button>
                        </form>
                        <div className="footer__subscribe--social">
                            <h3>Follow Us</h3>
                            <div className="fa fa-facebook">
                                <a href="http://facebook.com/bootiq.co.id" target="_blank"></a>
                            </div>
                            <div className="fa fa-instagram">
                                <a href="http://instagram.com/bootiqindonesia" target="_blank"></a>
                            </div>
                        </div>
                   </div>
                   <div className="footer__links">
                        <div className="brands">
                            <h3>Our Brands</h3>
                            <ul>
                                <li>
                                    <a href="http://www.x-pertstyle.com/" target="_blank">X-Pert</a>
                                </li>
                                <li>
                                    <a href="http://www.latulipe-id.com/" target="_blank">La Tulipe</a>
                                </li>
                                <li>
                                    <a href="http://lt-pro.com/" target="_blank">LT Pro</a>
                                </li>
                                <li>
                                    <a href="https://www.sdm-labs.com/" target="_blank">SDM</a>
                                </li>
                                <li>
                                    <a href="http://www.makeupstorecosmetics.com/" target="_blank">Make Up Store</a>
                                </li>
                            </ul>
                        </div>
                        <div className="information">
                            <h3>Information</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Careers</li>
                                <li>Privacy Policy</li>
                                <li>Terms &amp; Conditions</li>
                                <li>Security Policy</li>
                                <li>Payment Confirmation</li>
                                <li>Affiliate With Us</li>
                            </ul>
                        </div>
                        <div className="contact">
                            <h3>Customer Service</h3>
                            <ul>
                                <li className="telp">
                                    <span>Telpon:</span> 0318420015
                                </li>
                                <li className="sms">
                                    <span>SMS/Whatsapp:</span> 6287755909666
                                </li>
                                <li className="line">
                                    <span>Line:</span> bootiq
                                </li>
                                <li className="mail">
                                    <span>Email:</span> order@bootiq.co.id
                                </li>
                            </ul>
                        </div>
                   </div>
                   <div className="footer__copyright">
                        <p>&copy; Copyright 2017 - bootiq.co.id - All rights reserved.</p>
                   </div>
                    <div className="chatbox">
                        <h3>CHATBOX</h3>
                    </div>
                </div>
            );
    }
}
    
export default Footer;