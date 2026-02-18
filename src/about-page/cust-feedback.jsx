import React from "react";
import { PiQuotesBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const CustFeed = () => {
    return (
        <>
            <div className="cust-main">
                <div className="container">
                    <div className="title">
                        <span>customers feedback</span>
                        <strong>What they’re talking about <br />
                            our flight services</strong>
                    </div>
                    <div className="cust-inner">
                        <div className="cols">
                            <div className="part">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore hic expedita, nobis
                                    deserunt cum soluta quam.</p>
                                <div className="rating">
                                    <div className="star">
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                    </div>
                                    <div className="name">
                                        <strong>bonnie tobble</strong>
                                        <p>customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-img">
                                <img src="assets/images/customer-1.jpg" alt="customer-1" />
                            </div>
                            <div className="comma">
                                <PiQuotesBold className="icon" />
                            </div>
                        </div>
                        <div className="cols">
                            <div className="part">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore hic expedita, nobis
                                    deserunt cum soluta quam.</p>
                                <div className="rating">
                                    <div className="star">
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                    </div>
                                    <div className="name">
                                        <strong>christine eve</strong>
                                        <p>customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="customer-img">
                                <img src="assets/images/customer-2.jpg" alt="customer-2" />
                            </div>
                            <div className="comma">
                                <PiQuotesBold className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CustFeed;