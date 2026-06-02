import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-box">T</div>
        <span>The Idea Company</span>
      </div>

      <div className="nav-links">
        <button
          className="nav-btn"
          onClick={() => scrollToSection("how-it-works")}
        >
          How It Works
        </button>

        <button
          className="nav-btn"
          onClick={() => scrollToSection("software")}
        >
          The Software
        </button>

        <button
          className="nav-btn"
          onClick={() => scrollToSection("results")}
        >
          Results
        </button>

        <button
          className="nav-btn"
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </button>

        <button
  className="signup-btn"
  onClick={() =>
    window.location.href = "https://thinkers.theideacompany.co/login"
  }
>
  Sign Up Free
</button>
      </div>
    </nav>
  );
}

export default Navbar;