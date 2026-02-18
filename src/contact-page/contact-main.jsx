import React from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";

const ContactMain = () => {
    return (
        <>
            <div className="contact-main">
                <div className="container">
                    <div className="title">
                        <span>Contact us </span>
                        <p>Feel free to get in touch <br />
                            with the jetly </p>
                    </div>
                    <div className="contact-inner">
                        <div className="cols">
                            <div className="content">
                                <div className="details">
                                    <div className="text">
                                        <span>know</span>
                                        <strong>about us</strong>
                                    </div>
                                    <div className="icon">
                                    <PiAirplaneTiltFill />
                                    </div>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="content">
                                <div className="details">
                                    <div className="text">
                                        <span>write</span>
                                        <strong>send email</strong>
                                    </div>
                                    <div className="icon">
                                    <MdOutlineEmail />
                                    </div>
                                </div>
                                <p>
                                    <span><Link to="#">needhelp@company.com</Link></span>
                                    <span><Link to="#">info@company.com</Link></span>
                                </p>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="content">
                                <div className="details">
                                    <div className="text">
                                        <span>book</span>
                                        <strong>call now</strong>
                                    </div>
                                    <div className="icon">
                                    <MdOutlinePhoneInTalk />
                                    </div>
                                </div>
                                <p>
                                    <span><Link to="#">+ 92 ( 1800 )-6780</Link></span>
                                    <span><Link to="#">+ 00 24356 900</Link></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactMain;