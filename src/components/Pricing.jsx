import "../styles/Pricing.css";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "₹0",
    period: "forever",
    buttonText: "Create Free Account",
    description:
      "Sign up, explore the platform, and see your first startup ideas — no card required.",
    features: [
      "Generate startup ideas matched to you",
      "Preview idea summaries & sector tags",
      "See Opportunity Score for each idea",
      "Access the onboarding intake",
      "Full Idea Reports locked",
      "Execution Plans locked",
    ],
  },

  {
    title: "Idea Reports",
    price: "₹499",
    period: "/month",
    buttonText: "Get Idea Reports",
    subtitle: "≈ less than one business book/month",
    description:
      "Read every idea report in full — market analysis, revenue model, competitive landscape.",
    features: [
      "Everything in Free",
      "Full Idea Reports unlocked",
      "Complete market analysis per idea",
      "Revenue model & unit economics",
      "Competitive landscape deep-dive",
      "Opportunity Score breakdown",
      "Execution Plans locked",
    ],
  },

  {
    title: "Execution Plans",
    price: "₹999",
    period: "/month",
    highlighted: true,
    badge: "BUILD YOUR STARTUP",
    buttonText: "Start Building Now",
    subtitle: "Complete execution plan for every idea",
    description:
      "Full access — including analyst-verified execution plans for every idea generated.",
    features: [
      "Everything in Idea Reports",
      "Complete execution plan per idea",
      "90-day founder action plan",
      "Go-to-market playbook",
      "Legal entity setup guide",
      "Pitch deck template",
      "Funding strategy & investor list",
      "Priority analyst turnaround (24 hrs)",
      "Monthly 1-on-1 analyst session",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <span>PRICING</span>

        <h2>
          The most valuable software
          <br />
          a founder can own
        </h2>

        <p>
          A business school costs ₹40 lakh. A consultant charges ₹4,000/hr.
          We give you analyst-grade startup intelligence — starting free.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              plan.highlighted ? "featured" : ""
            }`}
          >
            {plan.badge && (
              <div className="plan-badge">
                {plan.badge}
              </div>
            )}

            <h3>{plan.title}</h3>

            <p className="plan-description">
              {plan.description}
            </p>

            <div className="price-block">
              <span className="price">
                {plan.price}
              </span>

              <span className="period">
                {plan.period}
              </span>
            </div>

            {plan.subtitle && (
              <div className="subtitle">
                {plan.subtitle}
              </div>
            )}

            <ul>
              {plan.features.map((item, i) => {
                const isLocked =
                item === "Full Idea Reports locked" ||
                item === "Execution Plans locked";

                return (
                  <li
                    key={i}
                    className={
                      isLocked ? "locked-feature" : ""
                    }
                  >
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>

            <button
              className={`plan-btn ${
                plan.highlighted
                  ? "featured-btn"
                  : ""
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      <p className="pricing-note">
        No credit card required to sign up. Upgrade anytime. Cancel anytime.
      </p>
    </section>
  );
}