import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logOut } from "../firebase/auth";


const Header = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    // Get user initials or first letter
    const getUserInitial = () => {
        if (user?.displayName) return user.displayName.charAt(0).toUpperCase();
        if (user?.email) return user.email.charAt(0).toUpperCase();
        return "U";
    };

    return (
        <>
            <div className="header">
                <div className="outer-main">
                    <div className="container">
                        <div className="outer-inner">
                            <div className="part-1">
                                <div className="logo">
                                    <img src="assets/images/jetly-logo.png" alt="logo" />
                                </div>
                            </div>
                            <div className="part-2">
                                <ul className="main-menu">
                                    <li><Link to="/">Home</Link></li>
                                    <li>
                                        <Link to="/about">Pages</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="#">about</Link>
                                            </li>
                                            <li>
                                                <Link to="#">team carousel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">destinations</Link>
                                            </li>
                                            <li>
                                                <Link to="#">destinations details</Link>
                                            </li>
                                            <li>
                                                <Link to="#">testimonial</Link>
                                            </li>
                                            <li>
                                                <Link to="#">testimonial carousel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">gallery</Link>
                                            </li>
                                            <li>
                                                <Link to="#">gallery carousel</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/service">Services</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="#">services</Link>
                                            </li>
                                            <li>
                                                <Link to="#">services carousel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">business charter</Link>
                                            </li>
                                            <li>
                                                <Link to="#">private charter</Link>
                                            </li>
                                            <li>
                                                <Link to="#">jet rentals</Link>
                                            </li>
                                            <li>
                                                <Link to="#">high profile people</Link>
                                            </li>
                                            <li>
                                                <Link to="#">music tours</Link>
                                            </li>
                                            <li>
                                                <Link to="#">sports team</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/news">News</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="#">news</Link>
                                            </li>
                                            <li>
                                                <Link to="#">news carousel</Link>
                                            </li>
                                            <li>
                                                <Link to="#">news sidebar</Link>
                                            </li>
                                            <li>
                                                <Link to="#">news carousel</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                        <ul className="sub-menu">
                                            <li>
                                                <Link to="#">product</Link>
                                            </li>
                                            <li>
                                                <Link to="#">products details</Link>
                                            </li>
                                            <li>
                                                <Link to="#">cart</Link>
                                            </li>
                                            <li>
                                                <Link to="#">checkout</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/contact">contact</Link>
                                    </li>
                                    <li>
                                        {user ? (
                                            <div className="header-user-menu" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                                {user.photoURL ? (
                                                    <img
                                                        src={user.photoURL}
                                                        alt="avatar"
                                                        style={{
                                                            width: '32px',
                                                            height: '32px',
                                                            borderRadius: '50%',
                                                            objectFit: 'cover',
                                                            border: '2px solid #6366f1'
                                                        }}
                                                    />
                                                ) : (
                                                    <div style={{
                                                        width: '32px',
                                                        height: '32px',
                                                        borderRadius: '50%',
                                                        background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#fff',
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        fontFamily: 'Inter, sans-serif'
                                                    }}>
                                                        {getUserInitial()}
                                                    </div>
                                                )}
                                                <span
                                                    onClick={handleLogout}
                                                    style={{
                                                        color: 'inherit',
                                                        fontSize: 'inherit',
                                                        cursor: 'pointer'
                                                    }}
                                                >
                                                    Logout
                                                </span>
                                            </div>
                                        ) : (
                                            <Link to="/login">Login</Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                            <div className="part-3">
                                <div className="search-cart">
                                    <div className="cart-icons">
                                        <FiSearch className="icon" />
                                        <BsCart className="icon"/>
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

export default Header;