import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="home-banner-main">
                <div className="banner-img">
                    <img src="assets/images/bannerimg-1.jpg" alt="bannerimg-1" />
                </div>
                <div className="container">
                    <div className="banner-inner">
                        <div className="banner-text">
                            <p>save time and fly with comfort</p>
                            <h2>luxury jet <br />flight</h2>
                            <div className="banner-btn">
                                <p>
                                    <Link to="#">book now</Link>
                                </p>
                                <p>
                                    <Link to="#">read more</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Banner;