import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Video = () => {
    return (
        <>
            <div className="vdo-main">
                <img src="assets/images/bannerimg-1.jpg" alt="bannerimg-1" />
                <div className="container">
                    <div className="vdo-inner">
                        <div className="part">
                            <div className="video-btn">
                                <FaPlay />
                            </div>
                            <div className="text">
                                <strong>Share requirements and our <br />
                                    charter experts will send you a quote</strong>
                            </div>
                            <div className="book-btn">
                                <span>
                                    <Link to="#">book now</Link>
                                </span>
                            </div>
                            <div className="read-btn">
                                <span>
                                    <Link to="#">read more</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;