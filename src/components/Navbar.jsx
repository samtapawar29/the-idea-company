import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-box">T</div>
        <span>The Idea Company</span>
      </div>

      <div className="nav-links">
        <a href="/">How It Works</a>
        <a href="/">The Software</a>
        <a href="/">Results</a>
        <a href="/">Pricing</a>

        <button className="signup-btn">
          Sign Up Free
        </button>
      </div>
    </nav>
  );
}

export default Navbar;