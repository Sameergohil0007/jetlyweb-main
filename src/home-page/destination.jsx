import React from "react";

const Destination = () => {
    return (
        <>
            <div className="dest-main">
                <div className="container">
                    <div className="title">
                        <span>What will you get </span>
                        <p>Checkout the popular jet <br />
                            charter destinations </p>
                    </div>
                    <div className="dest-inner">
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/destination-img-1.jpg" alt="destination-img-1" />
                            </div>
                            <div className="info-block">
                                <div className="name">
                                    <p>peris-barcelona</p>
                                </div>
                                <div className="time-block">
                                    <p>
                                        departure:
                                        <span>16:50</span>
                                    </p>
                                    <p>
                                        arrival:
                                        <span>20:42</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/destination-img-2.jpg" alt="destination-img-2" />
                            </div>
                            <div className="info-block">
                                <div className="name">
                                    <p>hamburg-london</p>
                                </div>
                                <div className="time-block">
                                    <p>
                                        departure:
                                        <span>16:50</span>
                                    </p>
                                    <p>
                                        arrival:
                                        <span>20:42</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/destination-img-3.jpg" alt="destination-img-3" />
                            </div>
                            <div className="info-block">
                                <div className="name">
                                    <p>london-madrid</p>
                                </div>
                                <div className="time-block">
                                    <p>
                                        departure:
                                        <span>16:50</span>
                                    </p>
                                    <p>
                                        arrival:
                                        <span>20:42</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Destination;