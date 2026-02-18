import React from "react";

const Form = () => {
    return (
        <>
            <div className="form-main">
                <div className="container">
                    <div className="form-inner">
                        <div className="part-1">
                            <div className="wraper">
                                <div className="col">
                                    <div className="content">
                                        <p>
                                            <input type="text" placeholder="your name" />
                                        </p>
                                        <p>
                                            <input type="text" placeholder="phone number" />
                                        </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="content">
                                        <p>
                                            <input type="email" placeholder="email address" />
                                        </p>
                                        <p>
                                            <input type="text" placeholder="subject" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="part-2">
                            <div className="content">
                                <textarea placeholder="write massage"/>
                            </div>
                        </div>
                        <div className="msg-btn">
                            <span>
                                <p>send massage</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Form;