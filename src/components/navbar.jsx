import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="preloader">
                <div className="inner">
                <figure className="logo"><img src="images/logo-light.png" alt="Image"/></figure>
                    <span className="percentage"></span>
                </div>
            </div>
            <div className="transition-overlay"></div>
            <div className="navigation-menu">
            <div className="inner">
                <div className="side-menu">
                <ul>
                    <li><a href="index-2.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="testimonials.html">Testimonials</a></li>
                    <li><a href="tradelines.html">Tradelines</a></li>
                    <li><a href="funding.html">Funding</a></li>
                    <li><a href="submit_file.html">Submit File</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                </div>
                <div className="sides">
                <figure><img src="images/overlay_img.jpg" alt="Image"/> </figure>
                </div>
                <div className="sides">
                <h2>We have helped over 110 companies secure business funding with over 3.2M funded in 2018 and aiming for 11M funded in 2019.</h2>
                <address>
                400 West Peachtree<br/>
                St NW Atlanta Ga,30339<br/>
                <a href="mailto:support@elitecreditrestorations.com?Subject=Hello" target="_top">support@elitecreditrestorations.com</a> +1 (844) 934-0602
                </address>
                </div>
            </div>
            </div>
            <aside className="left-side">
        <div className="logo"> <img src="images/logo-symbol.png" alt="Image"/> </div>
        <ul>
            <li><a href="https://www.facebook.com/elitecreditrestoration" target="_blank">FACEBOOK</a></li>
            <li><a href="https://www.instagram.com/elitecredit_" target="_blank">INSTAGRAM</a></li>
            <li><a href="submit_file.html">SUBMIT FILE</a></li>
        </ul>
        <a href="#top" className="gotop"><img src="images/icon-gotop.svg" alt="Image"/></a> </aside>

            <header className="header">
                <nav className="navbar">
                    <div className="logo"> <a href="index-2.html"><img src="images/logo.png" alt="Image"/></a> </div>
                    
                    <div className="phone"> T: +1 (844) 934-0602 </div>
                    
                    <div className="main-menu">
                    <ul>
                        <li><a href="index-2.html">Home</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="testimonials.html">Testimonials</a></li>
                        <li><a href="tradelines.html">Tradelines</a></li>
                        <li><a href="funding.html">Funding</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    </div>
                    <div className="hamburger-menu" id="hamburger-menu">
                    <div className="burger">
                        <svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <title>Show / Hide Navigation</title>
                        <rect className="burger-svg__base" width="50" height="50"/>
                        <g className="burger-svg__bars">
                            <rect className="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2"/>
                            <rect className="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2"/>
                            <rect className="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2"/>
                        </g>
                        </svg>
                    </div>
                    </div>
                </nav>
                <div className="page-title">
                    <div className="container">
                    <h2>Submit File</h2>
                    <h4>We need some information to fix your credit records.</h4>
                    </div>
                </div>
            </header>
        </div >
)};

export default NavBar;