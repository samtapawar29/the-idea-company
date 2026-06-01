import "../styles/HowItWorks.css";
import { Brain, Zap, Search, Rocket } from "lucide-react";

function HowItWorks() {
  return (
    <section className="howitworks">

      <div className="how-header">
        <span className="section-tag">HOW IT WORKS</span>

        <h2>
          From zero to execution-ready in 48 hours
        </h2>
      </div>

      <div className="timeline-line"></div>

      <div className="steps">

        {/* Step 1 */}
        <div className="step">
          <div className="step-circle">
            <Brain size={28} strokeWidth={2} />
            <span>01</span>
          </div>

          <h3>Profile Intake</h3>

          <p className="yellow">
            10-minute onboarding
          </p>

          <div className="step-card">
            <ul>
              <li>Skills & background</li>
              <li>Available capital</li>
              <li>Target market</li>
              <li>Risk tolerance</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="step">
          <div className="step-circle">
            <Zap size={28} strokeWidth={2} />
            <span>02</span>
          </div>

          <h3>Engine Generates</h3>

          <p className="yellow">
            40,000+ signals analyzed
          </p>

          <div className="step-card">
            <ul>
              <li>Market opportunity scan</li>
              <li>Competitive white-space</li>
              <li>Founder-market fit score</li>
              <li>3 unique ideas surfaced</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="step">
          <div className="step-circle">
            <Search size={28} strokeWidth={2} />
            <span>03</span>
          </div>

          <h3>Analysts Verify</h3>

          <p className="yellow">
            Human review in 48 hrs
          </p>

          <div className="step-card">
            <ul>
              <li>Market size confirmed</li>
              <li>Competitive moat stress-tested</li>
              <li>Execution feasibility checked</li>
              <li>Idea approved or refined</li>
            </ul>
          </div>
        </div>

        {/* Step 4 */}
        <div className="step">
          <div className="step-circle">
            <Rocket size={28} strokeWidth={2} />
            <span>04</span>
          </div>

          <h3>You Execute</h3>

          <p className="yellow">
            Full plan unlocked
          </p>

          <div className="step-card">
            <ul>
              <li>90-day action plan</li>
              <li>Go-to-market playbook</li>
              <li>Investor pitch template</li>
              <li>Analyst on call</li>
            </ul>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;