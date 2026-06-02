import "../styles/Hero.css";
import IdeaCard from "./IdeaCard";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    const scrollToHowItWorks = () => {
        const section = document.getElementById("how-it-works");
    
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

  return (
    <section className="hero">

      <div className="hero-left">

      <div className="tag">
  <span className="blink-dot"></span>
  AI + HUMAN ANALYSTS + ACTUAL SOFTWARE
</div>

        <h1>
          Your idea.
          <br />
          <span>Verified.</span>
          <br />
          Ready to build.
        </h1>

        <p>
        Unique startup idea. Complete execution plan — for every idea generated. Your first business, built from day one.
        </p>

        <div className="hero-buttons">
        <button
         className="primary-btn"
         onClick={() =>
             window.location.href = "https://thinkers.theideacompany.co/login"
          }
        >
  Sign Up — It's Free →
</button>

          <button className="secondary-btn"
          onClick={scrollToHowItWorks}>
            How It Works
          </button>
        </div>
        <div className="hero-stats">

  <div className="stat-item">
    <div className="stat-icon"></div>
    <div>
      <h3>12,400+</h3>
      <p>Ideas Generated</p>
    </div>
  </div>

  <div className="stat-item">
    <div className="stat-icon"></div>
    <div>
      <h3>₹340M+</h3>
      <p>Capital Raised</p>
    </div>
  </div>

  <div className="stat-item">
    <div className="stat-icon"></div>
    <div>
      <h3>94</h3>
      <p>Countries</p>
    </div>
  </div>

  <div className="stat-item">
    <div className="stat-icon"></div>
    <div>
      <h3>4.9 ★</h3>
      <p>Average Rating</p>
    </div>
  </div>

</div>

      </div>

      <div className="hero-right">
        <IdeaCard />
      </div>
      <div className="scroll-arrow">
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

    </section>
  );
}

export default Hero;
