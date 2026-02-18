import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { BsAirplane } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaArtstation } from "react-icons/fa";

const Service = () => {
    return (
        <>
            <div className="service-main">
                <div className="container">
                    <div className="service-inner">
                        <div className="columns">
                            <div className="parts">
                                <div className="icon">
                                    <IoDiamondOutline className="icon" />
                                </div>
                                <div className="text">
                                    <h4>luxury &amp; comfort</h4>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="parts">
                                <div className="icon">
                                    <BsAirplane className="icon" />                                </div>
                                <div className="text">
                                    <h4>safe &amp; secure</h4>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="parts">
                                <div className="icon">
                                    <AiOutlineSchedule className="icon" />                                </div>
                                <div className="text">
                                    <h4>personal shedule</h4>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="parts">
                                <div className="icon">
                                    <FaArtstation className="icon" />                                </div>
                                <div className="text">
                                    <h4>many airports</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;