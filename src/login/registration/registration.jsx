import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineUser } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { signUpWithEmail, signInWithGoogle } from "../../firebase/auth";
import "../auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  // Password strength calculation
  const passwordStrength = useMemo(() => {
    if (!password) return { level: 0, label: "" };
    let score = 0;
    if (password.length >= 6) score++;
    if (password.length >= 10) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { level: 1, label: "Weak", class: "weak" };
    if (score <= 3) return { level: 2, label: "Medium", class: "medium" };
    return { level: 3, label: "Strong", class: "strong" };
  }, [password]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      await signUpWithEmail(email, password, name);
      navigate("/");
    } catch (err) {
      const errorMessages = {
        "auth/email-already-in-use": "An account with this email already exists.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/weak-password": "Password is too weak. Use at least 6 characters.",
        "auth/operation-not-allowed": "Email/password sign-up is not enabled.",
        "auth/invalid-api-key": "Firebase is not configured yet. Please update firebase config.",
      };
      setError(errorMessages[err.code] || err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      if (err.code === "auth/popup-closed-by-user" || err.code === "auth/cancelled-popup-request") {
        // User closed the popup
      } else if (err.code === "auth/invalid-api-key" || err.message?.includes("invalid-api-key")) {
        setError("Firebase is not configured yet. Please update your firebase config.");
      } else {
        setError("Google sign-up failed. Please try again.");
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h1>Create account</h1>
          <p>Join Jetly and start exploring</p>
        </div>

        {/* Google Sign Up */}
        <button
          type="button"
          className="auth-google-btn"
          onClick={handleGoogleSignUp}
          disabled={googleLoading}
        >
          {googleLoading ? (
            <div className="auth-spinner"></div>
          ) : (
            <>
              <FcGoogle />
              <span>Sign up with Google</span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="auth-divider">
          <span>or register with email</span>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error">
            <MdErrorOutline className="auth-error-icon" />
            <p>{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister}>
          <div className="auth-form-group">
            <label htmlFor="register-name">Full Name</label>
            <div className="auth-input-wrapper">
              <input
                type="text"
                id="register-name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
              <HiOutlineUser className="auth-input-icon" />
            </div>
          </div>

          <div className="auth-form-group">
            <label htmlFor="register-email">Email</label>
            <div className="auth-input-wrapper">
              <input
                type="email"
                id="register-email"
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
            <label htmlFor="register-password">Password</label>
            <div className="auth-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="register-password"
                placeholder="Create a strong password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
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
            {/* Password Strength */}
            {password && (
              <>
                <div className="auth-password-strength">
                  {[1, 2, 3].map((bar) => (
                    <div
                      key={bar}
                      className={`auth-strength-bar ${
                        bar <= passwordStrength.level
                          ? `active ${passwordStrength.class}`
                          : ""
                      }`}
                    />
                  ))}
                </div>
                <div className={`auth-strength-text ${passwordStrength.class}`}>
                  {passwordStrength.label}
                </div>
              </>
            )}
          </div>

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? <div className="auth-spinner"></div> : <span>Create Account</span>}
          </button>
        </form>

        <p className="auth-terms">
          By creating an account, you agree to our{" "}
          <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>
        </p>

        <p className="auth-bottom-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;