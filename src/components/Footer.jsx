import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-logo">
          <div className="logo-box">T</div>
          <span>The Idea Company</span>
        </div>

        {/* Center */}
        <div className="footer-links">
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
          <a href="/">Contact</a>
        </div>

        {/* Right */}
        <div className="footer-copyright">
          © 2026 The Idea Company. All rights reserved.
        </div>

      </div>
    </footer>
  );
}