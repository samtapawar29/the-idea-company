import "../styles/Apps.css";

export default function App() {
  return (
    <div className="apps">
      

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="shield">
          <svg
            width="40"
            height="40"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L5 5v6c0 5 3.5 9.5 7 11 3.5-1.5 7-6 7-11V5l-7-3z" />
          </svg>
        </div>

        <h1>30-Day Money-Back Guarantee</h1>

        <p>
          If after 30 days you haven't received an analyst-verified execution
          plan you believe is actionable and genuinely differentiated, we'll
          refund you in full. No forms. No questions. No friction.
        </p>
      </section>
    </div>
  );
}