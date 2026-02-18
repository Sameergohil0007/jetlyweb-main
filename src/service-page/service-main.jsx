import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ServiceOffer = () => {
    return (
        <>
            <div className="offer-main">
                <div className="container">
                    <div className="title">
                        <span>what we’re offering</span>
                        <p>Select the service <br />
                            according to your work</p>
                    </div>
                    <div className="offer-inner">
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/offer-1.jpg" alt="offer-1" />
                            </div>
                            <div className="text-block">
                                <div className="heading">
                                    <span>flight For</span>
                                    <strong>business charter</strong>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                            <div className="icon-block">
                                <IoIosArrowForward className="icon" />
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/offer-2.jpg" alt="offer-1" />
                            </div>
                            <div className="text-block">
                                <div className="heading">
                                    <span>flight For</span>
                                    <strong>private charter</strong>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                            <div className="icon-block">
                                <IoIosArrowForward className="icon" />
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/offer-3.jpg" alt="offer-2" />
                            </div>
                            <div className="text-block">
                                <div className="heading">
                                    <span>flight For</span>
                                    <strong>jet rentals</strong>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                            <div className="icon-block">
                                <IoIosArrowForward className="icon" />
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/offer-4.jpg" alt="offer-1" />
                            </div>
                            <div className="text-block">
                                <div className="heading">
                                    <span>flight For</span>
                                    <strong>high profile people</strong>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                            <div className="icon-block">
                                <IoIosArrowForward className="icon" />
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/offer-5.jpg" alt="offer-5" />
                            </div>
                            <div className="text-block">
                                <div className="heading">
                                    <span>flight For</span>
                                    <strong>business charter</strong>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                            <div className="icon-block">
                                <IoIosArrowForward className="icon" />
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/offer-6.jpg" alt="offer-6" />
                            </div>
                            <div className="text-block">
                                <div className="heading">
                                    <span>flight For</span>
                                    <strong>business charter</strong>
                                </div>
                                <p>Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                            <div className="icon-block">
                                <IoIosArrowForward className="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ServiceOffer;