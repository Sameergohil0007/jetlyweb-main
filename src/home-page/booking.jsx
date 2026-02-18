import React from "react";

const Booking = () => {
    return (
        <>
            <div className="booking-main">
                <div className="booking-inner">
                    <div className="content-part">
                        <div className="text-block">
                            <span>Get your flight</span>
                            <strong>
                                Request for private flight
                            </strong>
                        </div>
                        <div className="form-part">
                            <div className="wraper">
                                <div className="col-1">
                                    <p>
                                        <input type="text" placeholder="fly from" />
                                    </p>
                                    <p>
                                        <input type="date" placeholder="select date" />
                                    </p>
                                    <p>
                                        <input type="text" placeholder="select baggage" />
                                    </p>
                                </div>
                                <div className="col-2">
                                    <p>
                                        <input type="text" placeholder="fly to" />
                                    </p>
                                    <div className="sub-wraper">
                                        <p>
                                            <input type="datetime" placeholder="select time" />
                                        </p>
                                        <p>
                                            <input type="text" placeholder="passengers" />
                                        </p>
                                    </div>
                                    <div className="book-btn">
                                        <span>
                                            <p>book now</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reqire-block">
                            <p><span>*</span> After sending request. We’ll contact you for more details about charter.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Booking;