// Home page
import React, { Component } from 'react'

import '../css/app.css';

class Landing extends Component {
    
        render () {
            return ( 
                <div>
                    <div class="landing">
                        <div class="landing__ads">
                            <img src="Banner-Malvava.jpg"/>
                        </div>      
                        <div class="landing__just-arrived">
                            <h3>Just Arrived</h3>
                            <div class="landing__just-arrived--products">
                                <div class="product">
                                    <img src="product-1.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">Make Up Store</span><br/>
                                        Marble Microshadow - Rosso Asiago<br/>
                                        Rp 290,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-2.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">X-pert</span><br/>
                                        Glitter Powder<br/>
                                        Rp 30,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-3.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Glitter Gel - Fresh Green<br/>
                                        Rp 78,500
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-4.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Color Collection No.01<br/>
                                        Rp 120,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-5.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Age Defiance Moisturizing Cleansing Foam<br/>
                                        Rp 125,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-6.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">La Tulipe</span><br/>
                                        Eye Brow Pencil - Brown<br/>
                                        Rp 52,500
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="landing__brands">

                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">Make Up Store</h3>
                                <img src="make-up-store.jpg"/>
                            </div>
                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">X-pert</h3>
                                <img src="x-pert.jpg"/>
                            </div>
                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">La Tulipe</h3>
                                <img src="la-tulipe.jpg"/>
                            </div>
                            <div class="landing__brands--name">
                                <h3 class="landing__brands--title">LT Pro</h3>
                                <img src="LT-pro.jpg"/>
                            </div>
                        </div>

                        <div class="landing__just-arrived">
                            <h3>Best Sellers</h3>
                            <div class="landing__just-arrived--products">
                                <div class="product">
                                    <img src="product-1.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">Make Up Store</span><br/>
                                        Marble Microshadow - Rosso Asiago<br/>
                                        Rp 290,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-2.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">X-pert</span><br/>
                                        Glitter Powder<br/>
                                        Rp 30,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-3.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Glitter Gel - Fresh Green<br/>
                                        Rp 78,500
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-4.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Eye Color Collection No.01<br/>
                                        Rp 120,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-5.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">LT Pro</span><br/>
                                        Age Defiance Moisturizing Cleansing Foam<br/>
                                        Rp 125,000
                                    </div>
                                </div>
                                <div class="product">
                                    <img src="product-6.jpg"/>
                                    <div class="product-description">
                                        <span class="product-brand">La Tulipe</span><br/>
                                        Eye Brow Pencil - Brown<br/>
                                        Rp 52,500
                                    </div>
                                </div>
                            </div>
                            <div class="landing__article">
                                <img src="blog.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    };
    
    export default Landing;