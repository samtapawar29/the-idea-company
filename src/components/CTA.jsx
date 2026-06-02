import "../styles/CTA.css";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="overlay"></div>

      <div className="cta-content">
        <p className="cta-label">YOUR NEXT MOVE</p>

        <h1 className="cta-heading">
          Your billion-dollar idea
          <br />
          is waiting.
        </h1>

        <p className="cta-description">
          The only thing between you and a fully verified,
          execution-ready startup idea is a 10-minute profile.
          Most founders wish they'd started sooner.
        </p>

        <button
          className="cta-button"
          onClick={() => {
          window.location.href = "https://thinkers.theideacompany.co/login";
    }}
        >
  Sign Up Free -- Get Your Idea →
</button>

        <p className="cta-note">
          🛡 Free to start. 30-day money-back guarantee.
          Cancel anytime.
        </p>
      </div>
    </section>
  );
}