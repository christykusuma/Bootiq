// Shop all page
import React, { Component } from 'react'

class ShopAll extends Component {
    
        render () {
            return ( 
                <div className="shop-all container-fluid">
                    <div className="filter">
                        <div className="filter__makeup">
                            <h3 className="filter__makeup--title">Makeup</h3>
                            <form className="filter__makeup--categories">
                                <input type="checkbox"/><label>Face</label><br/>
                                <input type="checkbox"/><label>Lips</label><br/>
                                <input type="checkbox"/><label>Brushes</label><br/>
                                <input type="checkbox"/><label>Brows</label><br/>
                                <input type="checkbox"/><label>Makeup Remover</label><br/>
                                <input type="checkbox"/><label>Palettes and Sets</label><br/>
                                <input type="checkbox"/><label>Eyes</label><br/>
                                <input type="checkbox"/><label>Tools</label><br/>
                                <input type="checkbox"/><label>Lashes</label>
                            </form>            
                        </div>
                        <div className="filter__brand">
                            <h3 className="filter__brand--title">Brand</h3>
                            <div className="filter__brand--searchbar"></div>
                            <form className="filter__brand--categories">
                                <input type="checkbox"/><label>X-Pert</label><br/>
                                <input type="checkbox"/><label>La Tulipe</label><br/>
                                <input type="checkbox"/><label>LT Pro</label><br/>
                                <input type="checkbox"/><label>LT Men</label><br/>
                                <input type="checkbox"/><label>SDM</label><br/>
                                <input type="checkbox"/><label>Make Up Store</label>
                            </form>
                        </div>
                        <div className="filter__price">
                            <h3 className="filter__price--title">Price</h3>
                            <form className="filter__price--categories">
                                <input type="radio"/><label>All Price</label><br/>
                                <input type="radio"/><label>Sale</label>
                            </form>
                        </div>
                    </div>
                    <div className="products-gallery">
                        <div class="product">
                            <img src="product-1.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">Make Up Store</span><br/>
                                Marble Microshadow<br/>
                                Rosso Asiago<br/>
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
                                Eye Glitter Gel<br/>
                                Fresh Green<br/>
                                Rp 78,500
                            </div>
                        </div>
                        <div class="product">
                            <img src="product-4.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">LT Pro</span><br/>
                                Eye Color<br/>
                                Collection No.01<br/>
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
                                Eye Brow Pencil<br/>
                                Brown<br/>
                                Rp 52,500
                            </div>
                        </div> 
                        <div class="product">
                            <img src="product-1.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">Make Up Store</span><br/>
                                Marble Microshadow<br/>
                                Rosso Asiago<br/>
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
                                Eye Glitter Gel<br/>
                                Fresh Green<br/>
                                Rp 78,500
                            </div>
                        </div>
                        <div class="product">
                            <img src="product-4.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">LT Pro</span><br/>
                                Eye Color<br/>
                                Collection No.01<br/>
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
                                Eye Brow Pencil<br/>
                                Brown<br/>
                                Rp 52,500
                            </div>
                        </div> 
                        <div class="product">
                            <img src="product-1.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">Make Up Store</span><br/>
                                Marble Microshadow<br/>
                                Rosso Asiago<br/>
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
                                Eye Glitter Gel<br/>
                                Fresh Green<br/>
                                Rp 78,500
                            </div>
                        </div>
                        <div class="product">
                            <img src="product-4.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">LT Pro</span><br/>
                                Eye Color<br/>
                                Collection No.01<br/>
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
                                Eye Brow Pencil<br/>
                                Brown<br/>
                                Rp 52,500
                            </div>
                        </div> 
                        <div class="product">
                            <img src="product-1.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">Make Up Store</span><br/>
                                Marble Microshadow<br/>
                                Rosso Asiago<br/>
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
                                Eye Glitter Gel<br/>
                                Fresh Green<br/>
                                Rp 78,500
                            </div>
                        </div>
                        <div class="product">
                            <img src="product-4.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">LT Pro</span><br/>
                                Eye Color<br/>
                                Collection No.01<br/>
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
                                Eye Brow Pencil<br/>
                                Brown<br/>
                                Rp 52,500
                            </div>
                        </div> 
                        <div class="product">
                            <img src="product-1.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">Make Up Store</span><br/>
                                Marble Microshadow<br/>
                                Rosso Asiago<br/>
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
                                Eye Glitter Gel<br/>
                                Fresh Green<br/>
                                Rp 78,500
                            </div>
                        </div>
                        <div class="product">
                            <img src="product-4.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">LT Pro</span><br/>
                                Eye Color<br/>
                                Collection No.01<br/>
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
                                Eye Brow Pencil<br/>
                                Brown<br/>
                                Rp 52,500
                            </div>
                        </div> 
                        <div class="product">
                            <img src="product-1.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">Make Up Store</span><br/>
                                Marble Microshadow<br/>
                                Rosso Asiago<br/>
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
                                Eye Glitter Gel<br/>
                                Fresh Green<br/>
                                Rp 78,500
                            </div>
                        </div>
                        <div class="product">
                            <img src="product-4.jpg"/>
                            <div class="product-description">
                                <span class="product-brand">LT Pro</span><br/>
                                Eye Color<br/>
                                Collection No.01<br/>
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
                    </div>        
                </div>
            );
        }
    };
    
export default ShopAll;