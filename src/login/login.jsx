import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { signInWithEmail, signInWithGoogle } from "../firebase/auth";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmail(email, password);
      navigate("/");
    } catch (err) {
      const errorMessages = {
        "auth/invalid-credential": "Invalid email or password. Please try again.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again or reset it.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/user-disabled": "This account has been disabled.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/invalid-api-key": "Firebase is not configured yet. Please update firebase config.",
      };
      setError(errorMessages[err.code] || err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") {
        // User closed the popup, no error to show
      } else if (err.code === "auth/invalid-api-key" || err.message?.includes("invalid-api-key")) {
        setError("Firebase is not configured yet. Please update your firebase config.");
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* Floating Particles */}
      <div className="auth-particles">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>

      <div className="auth-card">
        {/* Brand */}
        <div className="auth-brand">
          <div className="auth-brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1>Welcome back</h1>
          <p>Sign in to continue to Jetly</p>
        </div>

        {/* Google Sign In */}
        <button
          type="button"
          className="auth-google-btn"
          onClick={handleGoogleLogin}
          disabled={googleLoading}
        >
          {googleLoading ? (
            <div className="auth-spinner"></div>
          ) : (
            <>
              <FcGoogle />
              <span>Continue with Google</span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="auth-divider">
          <span>or sign in with email</span>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error">
            <MdErrorOutline className="auth-error-icon" />
            <p>{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleEmailLogin}>
          <div className="auth-form-group">
            <label htmlFor="login-email">Email</label>
            <div className="auth-input-wrapper">
              <input
                type="email"
                id="login-email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <HiOutlineMail className="auth-input-icon" />
            </div>
          </div>

          <div className="auth-form-group">
            <div className="auth-forgot-row">
              <label htmlFor="login-password">Password</label>
              <Link to="/forget" className="auth-forgot-link">Forgot password?</Link>
            </div>
            <div className="auth-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="login-password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                style={{ paddingRight: '52px' }}
              />
              <RiLockPasswordLine className="auth-input-icon" />
              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? <div className="auth-spinner"></div> : <span>Sign In</span>}
          </button>
        </form>

        <p className="auth-bottom-text">
          Don't have an account? <Link to="/register">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;