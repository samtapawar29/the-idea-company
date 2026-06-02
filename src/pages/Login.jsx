import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    alert("Login Successful");
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">TIC Dashboard</h1>

        <p className="login-subtitle">
          Welcome back! Sign in to continue.
        </p>

        <form onSubmit={handleLogin}>
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

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <p className="bottom-link">
          Don't have an account?
          <Link to="/register"> Create one</Link>
        </p>
      </div>

      <p className="copyright">
        © 2026 TIC Dashboard. All rights reserved.
      </p>
    </div>
  );
}

export default Login;