import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaUserCircle, FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <>
            <div className="home-news-main">
                <div className="container">
                    <div className="title">
                        <span>FROM THE BLOG POSTS </span>
                        <p>Checkout latest aviation <br />
                            news and articles </p>
                    </div>
                    <div className="news-inner">
                        <div className="wraper-inner">
                            <div className="cols">
                                <div className="part">
                                    <div className="image">
                                        <img src="assets/images/news-img-1.jpg" alt="news-img-1" />
                                    </div>
                                    <div className="text">
                                        <div className="date">
                                            <p>24 jan</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <span>
                                                    <FaUserCircle className="icon" />
                                                </span>
                                                <span>
                                                    <Link to="#">jetly</Link>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <FaComments className="icon" />
                                                </span>
                                                <span>
                                                    <Link to="#">2 comments</Link>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="content">
                                            <Link to="#">
                                                flights pracutionary landing in dubai of lorem ipsum
                                            </Link>
                                        </div>
                                        <div className="read-more">
                                            <Link to="#">read more
                                                <span>
                                                    <IoIosArrowRoundForward className="icon" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cols">
                                <div className="part">
                                    <div className="image">
                                        <img src="assets/images/news-img-2.jpg" alt="news-img-2" />
                                    </div>
                                    <div className="text">
                                        <div className="date">
                                            <p>24 jan</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <span>
                                                    <FaUserCircle className="icon" />
                                                </span>
                                                <span>
                                                    <Link to="#">jetly</Link>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <FaComments className="icon" />

                                                </span>
                                                <span>
                                                    <Link to="#">2 comments</Link>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="content">
                                            <Link to="#">
                                                flights pracutionary landing in dubai of lorem ipsum
                                            </Link>
                                        </div>
                                        <div className="read-more">
                                            <Link to="#">read more
                                                <span>
                                                    <IoIosArrowRoundForward className="icon" />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cols">
                                <div className="part">
                                    <div className="image">
                                        <img src="assets/images/news-img-3.jpg" alt="news-img-3" />
                                    </div>
                                    <div className="text">
                                        <div className="date">
                                            <p>24 jan</p>
                                        </div>
                                        <ul>
                                            <li>
                                                <span>
                                                    <FaUserCircle className="icon" />
                                                </span>
                                                <span>
                                                    <Link to="#">jetly</Link>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <FaComments className="icon" />
                                                </span>
                                                <span>
                                                    <Link to="#">2 comments</Link>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="content">
                                            <Link to="#">
                                                flights pracutionary landing in dubai of lorem ipsum
                                            </Link>
                                        </div>
                                        <div className="read-more">
                                            <Link to="#">read more
                                                <span>
                                                    <IoIosArrowRoundForward className="icon" />
                                                </span>
                                            </Link>
                                        </div>
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

export default News;