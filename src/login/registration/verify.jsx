import axios from "axios";
import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Verify = () => {

    const navigate = useNavigate();

    const handleemail = useRef();

    

    const handle = (e) => {
        e.preventDefault();

        const email = handleemail.current.value;

        const obj = {
            "email": email,
        }

        axios.post('http://localhost:5000/verify', obj)
            .then(function (response) {
                // console.log(response);
                navigate("/otp");
                toast(response.data.msg);
            })
            .catch(function (error) {
                toast(error.response.data.msg);
            })
    }

    return (
        <>
            <ToastContainer />
            <div className="center">
                <div className="login_form">
                    <form method="POST" onSubmit={handle}>
                        <h3>Log in with</h3>
                        <div className="login_option">
                            <div className="option">
                                <Link to="#">
                                    <FcGoogle />
                                    <span>Google</span>
                                </Link>
                            </div>
                            <div className="option">
                                <Link to="#">
                                    <IoLogoApple />
                                    <span>Apple</span>
                                </Link>
                            </div>
                        </div>
                        <p className="separator">
                            <span>or</span>
                        </p>

                        <div className="input_box">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter email address" required ref={handleemail} />
                        </div>
                        <button type="submit">Verify</button>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Verify;