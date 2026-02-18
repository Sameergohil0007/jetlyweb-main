import React from "react";
import { RiCopilotLine } from "react-icons/ri";
import { IoMdJet } from "react-icons/io";
import { TfiDirectionAlt } from "react-icons/tfi";
import { TfiWorld } from "react-icons/tfi";

const Counter = () => {
    return (
        <>
            <div className="counter-main">
                <div className="container">
                    <div className="counter-inner">
                        <div className="part">
                            <div className="cols">
                                <RiCopilotLine className="icon" />
                                <div className="text">
                                    <span>395</span>
                                    <p>profetional pilots</p>
                                </div>
                            </div>
                            <div className="cols">
                                <IoMdJet className="icon" />
                                <div className="text">
                                    <span>166</span>
                                    <p>Jet airplanes</p>
                                </div>
                            </div>
                            <div className="cols">
                                <TfiDirectionAlt className="icon" />
                                <div className="text">
                                    <span>138</span>
                                    <p>Directions</p>
                                </div>
                            </div>
                            <div className="cols">
                                <TfiWorld className="icon" />
                                <div className="text">
                                    <span>280</span>
                                    <p>World airports</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Counter;