import React from "react";
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterestP,FaPhone  } from "react-icons/fa";
import { MdCopyright,MdEmail } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-top">
                    <div className="footer-main">
                        <div className="container">
                            <div className="footer-inner">
                                <div className="text">
                                    <p>Save your time and fly with jetly</p>
                                </div>
                                <div className="book-btn">
                                    <Link to="#">
                                        <span>call for booking</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer middle block start */}
                <div className="footer-middle">
                    <div className="footer-mid-main">
                        <div className="container">
                            <div className="footer-mid-inner">
                                <div className="col-1">
                                    <div className="part">
                                        <div className="logo">
                                            <Link to="#">
                                                <img src="assets/images/jetly-logo.png" alt="jetly-logo" />
                                            </Link>
                                        </div>
                                        <div className="text">
                                            <p>Private jet charters save your time and give you comfort.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="parts">
                                        <div className="title">
                                            <p>Explore</p>
                                        </div>
                                        <ul>
                                            <li><Link to="#">About</Link></li>
                                            <li><Link to="#">private jet catering</Link></li>
                                            <li><Link to="#">destination</Link></li>
                                            <li><Link to="#">flight search</Link></li>
                                            <li><Link to="#">book flight</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="parts">
                                        <div className="title">
                                            <p>links</p>
                                        </div>
                                        <ul>
                                            <li><Link to="#">terms of use</Link></li>
                                            <li><Link to="#">contact us</Link></li>
                                            <li><Link to="#">news &amp; press</Link></li>
                                            <li><Link to="#">faqs</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="parts">
                                        <div className="title">
                                            <p>contacts</p>
                                        </div>
                                        <ul>
                                            <li>
                                            <FaPhone className="icon"/>
                                                <Link to="#">+ 92( 8800 )-6780</Link>
                                            </li>
                                            <li>
                                            <MdEmail className="icon"/>
                                                <Link to="#">needhelp@company.com</Link>
                                            </li>
                                            <li>
                                            <FaLocationPin className="icon"/>
                                                <Link to="#">30 broclyn golde street,new york</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer bottom start  */}
                <div className="footer-bottom">
                    <div className="footer-bot-main">
                        <div className="container">
                            <div className="footer-bot-inner">
                                <div className="col-1">
                                    <div className="text">
                                    <MdCopyright className="icon"/>
                                        <p>Copyright 2023 by
                                            <Link to="#">Jetly.com</Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="media-icons">
                                        <Link to="#"><FaFacebookF className="icon"/></Link>
                                        <Link to="#"><FaTwitter className="icon"/></Link>
                                        <Link to="#"><FaInstagram className="icon"/></Link>
                                        <Link to="#"><FaPinterestP className="icon"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;