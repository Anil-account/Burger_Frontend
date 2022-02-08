import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../header/icon/logo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="footer-content-1 row">
                    <div className="footer-contact col-12 col-xl-5 d-flex flex-column align-items-center align-items-xl-start">
                        <div className="footer-logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="footer-phone">
                            <i className="fas fa-phone-volume"></i>
                            <span>977989555</span>
                        </div>
                        <div className="footer-contact">
                            Food Center
                        </div>
                    </div>
                    <div className="footer-content-widget col-12 col-xl-7 container d-flex align-items-center justify-content-center">
                        <div className="row footer-row">
                            <div className="footer-menu col-12 col-md-4">
                                <h2 className="widget-title">Category</h2>
                                <div className="menu-footer-1-container">
                                    <ul>
                                        <li>
                                            <Link to="/">Pizza</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Burgers</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Sushi</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Noodles</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-menu col-12 col-md-4">
                                <h2 className="widget-title">About Us</h2>
                                <div className="menu-footer-1-container">
                                    <ul>
                                        <li>
                                            <Link to="/">Introduction</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-menu col-12 col-md-4">
                                <h2 className="widget-title">Support</h2>
                                <div className="menu-footer-1-container">
                                    <ul>
                                        <li>
                                            <Link to="/">Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Rules</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Frequently asked question</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content-2">
                    <div className="footer-soical">
                        <div className="footer-soical-container">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;