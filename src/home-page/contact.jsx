import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdPeopleOutline } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className="home-contact-main">
                <div className="container">
                    <div className="contact-inner">
                        <div className="colums">
                            <div className="about-1">
                                <span>get to know us</span>
                                <strong>Our jetly save your time and give you comfort in flights</strong>
                            </div>
                            <div className="about-2">
                                Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at
                                elementum orci pulvinar vel. Pellentesque habitant morbi tristique. Pellentesque habitant
                                morbi tristique. Ut non augue egestas, commodo velit eget, vestibulum tellus.
                            </div>
                            <ul className="about-3">
                                <li>
                                    <i className="fa-solid fa-check" />
                                    <div className="text">
                                        <span>There are many variations of passage of lorem.</span>
                                    </div>
                                </li>
                                <li>
                                    <i className="fa-solid fa-check" />
                                    <div className="text">
                                        <span>Available but the majority alteration.</span>
                                    </div>
                                </li>
                            </ul>
                            <div className="about-4">
                                <div className="disc-btn">
                                    <p>discover more</p>
                                </div>
                                <div className="phone">
                                    <FiPhoneCall className="icon"/>
                                    <div className="number">
                                        <p>Call Anytime</p>
                                        <span>+92(2340)-4356</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="img">
                                <img src="assets/images/contact-img.jpg" alt="contact-img" />
                            </div>
                            <div className="clients">
                            <MdPeopleOutline className="icon"/>
                                <div className="client-count">
                                    <p>8800</p>
                                    <span>Satisfied Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Contact;