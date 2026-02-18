import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import axios from "axios";

const Otp = () => {

    const navigate = useNavigate();
    const handleotp = useRef();

    const handle = (e) => {
        e.preventDefault();

        const otp = handleotp.current.value;

        const obj = {
            "otp": otp
        }

        axios.post('http://localhost:5000/otp', obj)
            .then(function (response) {
                // console.log(response);
                navigate("/");
                toast(response.data.msg);
            })
            .catch(function (error) {
                console.log(error.response.data.msg);
                toast(error.response.data.msg);
            })
    }

    return (
        <>
            <ToastContainer />
            <div className="center">
                <div className="login_form">
                    <form method="POST" onSubmit={handle}>
                        <div className="input_box">
                            <label htmlFor="email">otp</label>
                            <input type="text" id="number" ref={handleotp} />
                        </div>
                        <button type="submit">Verify</button>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Otp;