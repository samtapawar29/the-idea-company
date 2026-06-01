import { useState } from "react";
import "../styles/FAQ.css";

const faqData = [
  {
    question: "Is this AI-generated garbage or actually useful?",
    answer:
      "No. Every execution plan is reviewed and verified before delivery to ensure it is practical and actionable.",
  },
  {
    question: "How are my ideas unique to me?",
    answer:
      "The platform analyzes your background, skills, interests, and goals to generate highly personalized opportunities.",
  },
  {
    question: "What exactly does the execution plan include?",
    answer:
      "You receive step-by-step actions, market validation insights, growth strategies, and implementation guidance.",
  },
  {
    question: "Do I need business experience to use this?",
    answer:
      "No. The platform is designed for beginners as well as experienced founders.",
  },
  {
    question: "What if I don't like the ideas generated for me?",
    answer:
      "Our money-back guarantee ensures you can request a refund if the plan does not meet your expectations.",
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