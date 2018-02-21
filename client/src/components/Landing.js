// Home page
import React, { Component } from 'react'

class Landing extends Component {
    
        render () {
            return ( 
                <div>
                    <div className="landing">
                        <img className="landing__ads container-fluid" src="Banner-Januari.jpg"/>    
                        <div className="landing__just-arrived container-fluid">
                            <h3>Just Arrived</h3>
                            <div className="landing__just-arrived--products">
                                <div className="product">
                                    <img src="product-1.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">Make Up Store</span><br/>
                                        Marble Microshadow<br/>
                                        Rosso Asiago<br/>
                                        Rp 290,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-2.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">X-pert</span><br/>
                                        Glitter Powder<br/>
                                        Rp 30,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-3.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">LT Pro</span><br/>
                                        Eye Glitter Gel<br/>
                                        Fresh Green<br/>
                                        Rp 78,500
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-4.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">LT Pro</span><br/>
                                        Eye Color<br/>
                                        Collection No.01<br/>
                                        Rp 120,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-5.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">LT Pro</span><br/>
                                        Age Defiance Moisturizing Cleansing Foam<br/>
                                        Rp 125,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-6.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">La Tulipe</span><br/>
                                        Eye Brow Pencil<br/>
                                        Brown<br/>
                                        Rp 52,500
                                    </div>
                                </div>
                                <a className="prev" onClick="plusProduct(-1)">&#10094;</a>
                                <a className="next" onClick="plusProduct(1)">&#10095;</a> 
                            </div>
                        </div>
                        {/* <div className="landing__brands">
                            <div className="landing__brands--name">
                                <h3 className="landing__brands--title">Make Up Store</h3>
                                <img src="make-up-store.jpg"/>
                            </div>
                            <div className="landing__brands--name">
                                <h3 className="landing__brands--title">X-pert</h3>
                                <img src="x-pert.jpg"/>
                            </div>
                            <div className="landing__brands--name">
                                <h3 className="landing__brands--title">La Tulipe</h3>
                                <img src="la-tulipe.jpg"/>
                            </div>
                            <div className="landing__brands--name">
                                <h3 className="landing__brands--title">LT Pro</h3>
                                <img src="LT-pro.jpg"/>
                            </div>
                        </div> */}

                        <div className="landing__bestsellers container-fluid">
                            <h3>Top Picks</h3>
                            <div className="landing__bestsellers--products">
                                <div className="product">
                                    <img src="product-1.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">Make Up Store</span><br/>
                                        Marble Microshadow<br/>
                                        Rosso Asiago<br/>
                                        Rp 290,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-2.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">X-pert</span><br/>
                                        Glitter Powder<br/>
                                        Rp 30,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-3.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">LT Pro</span><br/>
                                        Eye Glitter Gel<br/>
                                        Fresh Green<br/>
                                        Rp 78,500
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-4.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">LT Pro</span><br/>
                                        Eye Color<br/>
                                        Collection No.01<br/>
                                        Rp 120,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-5.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">LT Pro</span><br/>
                                        Age Defiance Moisturizing Cleansing Foam<br/>
                                        Rp 125,000
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="product-6.jpg"/>
                                    <div className="product-description">
                                        <span className="product-brand">La Tulipe</span><br/>
                                        Eye Brow Pencil<br/>
                                        Brown<br/>
                                        Rp 52,500
                                    </div>
                                </div> 
                                <a className="prev" onClick="plusProduct(-1)">&#10094;</a>
                                <a className="next" onClick="plusProduct(1)">&#10095;</a>                         
                            </div>
                        </div>
                        <div className="landing__blog container-fluid">
                            <img className="landing__blog--pic" src="blog.jpg"/>
                            <div className="landing__blog--read">
                                <h3>Essential skincare.</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <button>Read more...</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
    
    export default Landing;