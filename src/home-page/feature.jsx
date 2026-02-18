import React from "react";

const Feature = () => {
    return (
        <>
            <div className="feature-main">
                <div className="container">
                    <div className="feature-inner">
                        <div className="column">
                            <div className="part">
                                <div className="content">
                                    <span>Collect miles</span>
                                    <strong>get discount next flight with our card</strong>
                                </div>
                                <div className="text-para">
                                    <p>Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit,
                                        at
                                        elementum orci pulvinar vel.</p>
                                </div>
                                <div className="disc-btn">
                                    <p>discover more</p>
                                </div>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/feature-1.jpg" alt="images/feature-1" />
                            </div>
                            <div className="content">
                                <p>exclusive <br />new offers</p>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="img">
                                <img src="assets/images/feature-2.jpg" alt="images/feature-2" />
                            </div>
                            <div className="content">
                                <p>join our <br />cabin crew</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feature;