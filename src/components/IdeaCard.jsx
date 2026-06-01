import { useState, useEffect } from "react";
import "../styles/IdeaCard.css";

const cards = [
  {
    name: "LogiTrack AI",
    category: "B2B SaaS · Logistics",
    score: "94",
    insight:
      "Enterprise logistics teams spend millions manually coordinating shipments.",
    market: "₹42B TAM",
    revenue: "₹130K",
    plan1: "Day 1-30: MVP + 3 pilot contracts",
    plan2: "Day 31-60: ₹8K MRR target",
    plan3: "Day 61-90: Seed deck + raise",
  },

  {
    name: "NutriAI Platform",
    category: "Consumer Health · AI",
    score: "91",
    insight:
      "Gen Z is spending $4B/yr on generic supplements. A personalized AI-driven nutrition OS has zero dominant player.",
    market: "₹28B TAM",
    revenue: "₹84K",
    plan1: "Day 1-30: Waitlist + MVP protocol",
    plan2: "Day 31-60: 500 paid beta users",
    plan3: "Day 61-90: ₹20K MRR",
  },

  {
    name: "PayFast Africa",
    category: "Fintech · Emerging Markets",
    score: "97",
    insight:
      "West African B2B cross-border payments still run on SWIFT with 4-day settlement.",
    market: "₹67B TAM",
    revenue: "₹210K",
    plan1: "Day 1-30: Entity + PoC with 2 SMEs",
    plan2: "Day 31-60: Process first ₹100K GMV",
    plan3: "Day 61-90: Series A pipeline",
  },
];

function IdeaCard() {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const card = cards[activeCard];

  return (
    <div className="idea-card fade-card">

      <div className="card-top">

        <div className="card-logo">S</div>

        <span>Startup Idea Card</span>

        <div className="verified">
          ● Analyst verified
        </div>

      </div>

      <div className="card-content">

        <div className="title-row">

          <div>

            <h2>{card.name}</h2>

            <p>{card.category}</p>

          </div>

          <div className="score-box">

            <span>Opp. Score</span>

            <h3>{card.score}</h3>

          </div>

        </div>

        <div className="market-box">

          <span>MARKET INSIGHT</span>

          <p>{card.insight}</p>

        </div>

        <div className="info-grid">

          <div className="market-size">

            <span>Market Size</span>

            <h4>{card.market}</h4>

          </div>

          <div className="revenue">

            <span>Month-8 Revenue</span>

            <h4>{card.revenue}</h4>

          </div>

        </div>

        <div className="tags">

          <span>Market Analysis</span>

          <span>Revenue Model</span>

          <span>GTM Playbook</span>

          <span>90-Day Plan</span>

        </div>

        <ul>

          <li>{card.plan1}</li>

          <li>{card.plan2}</li>

          <li>{card.plan3}</li>

        </ul>

        <button>
          ⚡ Generate Next Idea
        </button>

        <div className="dots">

          {cards.map((_, index) => (
            <span
              key={index}
              className={activeCard === index ? "dot active" : "dot"}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default IdeaCard;