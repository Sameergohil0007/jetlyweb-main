import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdErrorOutline, MdCheckCircleOutline } from "react-icons/md";
import { resetPassword } from "../../firebase/auth";
import "../auth.css";

const Verify = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      await resetPassword(email);
      setSuccess("Password reset email sent! Check your inbox.");
      setEmail("");
    } catch (err) {
      const errorMessages = {
        "auth/user-not-found": "No account found with this email address.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/too-many-requests": "Too many requests. Please try again later.",
      };
      setError(errorMessages[err.code] || "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
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
        <Link to="/login" className="auth-back-link">
          <IoArrowBackOutline />
          Back to sign in
        </Link>

        {/* Brand */}
        <div className="auth-brand">
          <div className="auth-brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h1>Reset password</h1>
          <p>Enter your email to receive a reset link</p>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error">
            <MdErrorOutline className="auth-error-icon" />
            <p>{error}</p>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="auth-success">
            <MdCheckCircleOutline className="auth-success-icon" />
            <p>{success}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleReset}>
          <div className="auth-form-group">
            <label htmlFor="reset-email">Email Address</label>
            <div className="auth-input-wrapper">
              <input
                type="email"
                id="reset-email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <HiOutlineMail className="auth-input-icon" />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? <div className="auth-spinner"></div> : <span>Send Reset Link</span>}
          </button>
        </form>

        <p className="auth-bottom-text">
          Remember your password? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Verify;