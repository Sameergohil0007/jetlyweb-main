import axios from "axios";
import React, { useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate = useNavigate();
    
    const handleemail = useRef();
    const handlepassword = useRef();

    const handle = (e) => {
        e.preventDefault();

        const email = handleemail.current.value;
        const password = handlepassword.current.value;

        const obj = {
            "email": email,
            "password": password
        }

        axios.post('http://localhost:5000/login', obj)
            .then(function (response) {
                // console.log(response);
                // alert("success
                navigate("/");
            })
            .catch(function (error) {
                console.log(error.response);
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
                        <div className="input_box">
                            <div className="password_title">
                                <label htmlFor="password">Password</label>
                                <Link to="/forget">Forgot Password?</Link>
                            </div>
                            <input type="password" id="password" placeholder="Enter your password" required ref={handlepassword} />
                        </div>
                        <button type="submit">Log In</button>
                        <p className="sign_up">Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}


export default Login;