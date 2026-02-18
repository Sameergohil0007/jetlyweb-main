import React from "react";
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterestP} from "react-icons/fa";
import { Link } from "react-router-dom";


const Team = () => {
    return (
        <>
            <div className="team-main">
                <div className="container">
                    <div className="title">
                        <span>aircraft crew</span>
                        <strong>Meet the professional <br />
                            private jet crew</strong>
                    </div>
                    <div className="team-inner">
                        <div className="cols">
                            <div className="part">
                                <div className="image">
                                    <img src="assets/images/team-1.jpg" alt="team-1" />
                                </div>
                                <div className="content">
                                    <strong>jessica brown</strong>
                                    <p>Senior pilot</p>
                                    <div className="media-icons">
                                        <Link to="#"><FaFacebookF className="icon" /></Link>
                                        <Link to="#"><FaTwitter className="icon" /></Link>
                                        <Link to="#"><FaInstagram className="icon" /></Link>
                                        <Link to="#"><FaPinterestP className="icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="part">
                                <div className="image">
                                    <img src="assets/images/team-2.jpg" alt="team-2" />
                                </div>
                                <div className="content">
                                    <strong>jessica brown</strong>
                                    <p>Senior pilot</p>
                                    <div className="media-icons">
                                        <Link to="#"><FaFacebookF className="icon" /></Link>
                                        <Link to="#"><FaTwitter className="icon" /></Link>
                                        <Link to="#"><FaInstagram className="icon" /></Link>
                                        <Link to="#"><FaPinterestP className="icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cols">
                            <div className="part">
                                <div className="image">
                                    <img src="assets/images/team-3.jpg" alt="team-3" />
                                </div>
                                <div className="content">
                                    <strong>jessica brown</strong>
                                    <p>Senior pilot</p>
                                    <div className="media-icons">
                                        <Link to="#"><FaFacebookF className="icon" /></Link>
                                        <Link to="#"><FaTwitter className="icon" /></Link>
                                        <Link to="#"><FaInstagram className="icon" /></Link>
                                        <Link to="#"><FaPinterestP className="icon" /></Link>
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

export default Team;