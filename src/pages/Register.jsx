import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created Successfully");

    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">TIC Dashboard</h1>

        <p className="register-subtitle">
          Create your account to get started.
        </p>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            Create Account
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <p className="bottom-link">
          Already have an account?
          <Link to="/login"> Sign in</Link>
        </p>
      </div>

      <p className="copyright">
        © 2026 TIC Dashboard. All rights reserved.
      </p>
    </div>
  );
}

export default Register;