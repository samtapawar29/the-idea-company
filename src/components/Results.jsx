import "../styles/Results.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    company: "LogiTrack · Mumbai, India",
    result: "₹1.2M Raised",
    image: "https://i.pravatar.cc/80?img=12",
    quote:
      "Raised ₹1.2M seed round 9 months after using the software. The execution plan gave me a clear product roadmap I could take directly to investors.",
  },
  {
    name: "Priya Sharma",
    company: "NutriAI · Singapore",
    result: "₹40K MRR",
    image: "https://i.pravatar.cc/80?img=32",
    quote:
      "I had no business background. The plan told me exactly who to hire first, which customers to target, and how to price. We hit ₹40K MRR in 8 months.",
  },
  {
    name: "James Okafor",
    company: "PayFast Africa · Lagos, Nigeria",
    result: "₹2M/mo GMV",
    image: "https://i.pravatar.cc/80?img=15",
    quote:
      "The idea our engine generated was something I never would have found on my own — a gap in B2B payments infrastructure in West Africa.",
  },
];

const stats = [
  {
    value: "12,400+",
    label: "Ideas Generated",
  },
  {
    value: "₹340M+",
    label: "Capital Raised",
  },
  {
    value: "94 Countries",
    label: "Active Users",
  },
  {
    value: "4.9 / 5",
    label: "Average Rating",
  },
];

export default function Results() {
  return (
    <section className="results-section">
      <div className="heading">
        <p className="subheading">REAL RESULTS</p>

        <h2>
          Students who used the software
          <br />
          and built real companies
        </h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="#d4af37" color="#d4af37" size={16} />
              ))}
            </div>

            <p className="quote">"{item.quote}"</p>

            <div className="footer">
              <div className="profile">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>

              <div className="result">{item.result}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}