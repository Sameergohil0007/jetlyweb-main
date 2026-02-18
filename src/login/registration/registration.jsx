import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    // const handlename = useRef();
    // const handleemail = useRef();
    // const handlepassword = useRef();

    // const handlesubmit = (e) => {
    //     console.log(e);
    //     // e.preventDefault();

    //     // const name = handlename.current.value;
    //     // const email = handleemail.current.value;
    //     // const password = handlepassword.current.value;

    //     // const obj = {}
    //     //     "username": name,
    //     //     "email": email,
    //     //     "password": password
    //     // }
    //     // // console.log(obj);

    //     // axios.post('http://localhost:5000/regi' , obj)
    //     // .then(function (response) {
    //     //         // console.log(response);
    //     //         alert("success");
    //     //         navigate("/login");
    //     //     })
    //     //     .catch(function (error) {
    //     //         console.log(error);
    //     //     })
    // }




    return (
        <>
            <div className="center">
                <div className="login_form">
                    <form method="POST" /*onSubmit={handlesubmit} */>
                        <h3>Registration</h3>
                        <div className="input_box">
                            <label htmlFor="email">Username</label>
                            <input type="text" id="username" placeholder="Enter username address" /*required ref={handlename} */ />
                        </div>
                        <div className="input_box">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter email address" /*required ref={handleemail}*/ />
                        </div>
                        <div className="input_box">
                            <div className="password_title">
                                <label htmlFor="password">Password</label>
                            </div>
                            <input type="password" id="password" placeholder="Enter your password" /*required ref={handlepassword} */ />
                        </div>
                        {/* <button type="submit" onChange={handlesubmit}>Log In</button> */}
                        <p className="sign_up">Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;