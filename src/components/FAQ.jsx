import { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "Is this AI-generated garbage or actually useful?",
    answer:
      "Every idea our engine surfaces is stress-tested by our in-house team of research analysts — MBAs, ex-consultants, and operators who have worked inside real startups. They verify market size, competitive landscape, and execution feasibility before any idea reaches you. You get analyst-grade intelligence, not hallucinated fluff.",
  },
  {
    question: "How are my ideas unique to me?",
    answer:
      "Our engine cross-references your background, skills, geography, available capital, and risk tolerance against a database of 40,000+ market signals. The combination is mathematically unique. No two users receive the same idea set.",
  },
  {
    question: "What exactly does the execution plan include?",
    answer:
      "Each execution plan covers: legal entity setup, initial product or service architecture, go-to-market strategy, first 90 days of customer acquisition, unit economics model, hiring milestones, funding strategy, and a risk register. It reads like a strategy deck from a top consulting firm — built specifically for your idea.",
  },
  {
    question: "Do I need business experience to use this?",
    answer:
      "No. The execution plans are written to be followed by a first-time founder. Every step is explained, every term is defined, and every action item is sequenced. If you can follow instructions, you can execute the plan.",
  },
  {
    question: "What if I don't like the ideas generated for me?",
    answer:
      "You can regenerate as many times as you want within your plan, adjusting parameters like industry, capital requirement, or time-to-revenue. If after 30 days you feel the software hasn't delivered value, we refund every penny — no forms, no friction.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <p className="faq-label">FAQ</p>

      <h2 className="faq-heading">
        Honest answers to hard questions
      </h2>

      <div className="faq-container">
        {faqData.map((item, index) => (
          <div className="faq-card" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>

              <span
                className={`arrow ${
                  openIndex === index ? "rotate" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}