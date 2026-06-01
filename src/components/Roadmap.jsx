import React from "react";
import "../styles/Roadmap.css";

const roadmapData = [
  {
    days: "Days 1-30",
    title: "Foundation",
    side: "right",
    tasks: [
      "Register legal entity",
      "Open business bank account",
      "Build MVP spec document",
      "Identify first 10 target customers",
      "Set up analytics & tracking",
    ],
  },
  {
    days: "Days 31-60",
    title: "Traction",
    side: "left",
    tasks: [
      "Launch beta with 3 pilot customers",
      "Collect structured feedback",
      "Iterate on product weekly",
      "Begin content/outreach engine",
      "Close first paying customer",
    ],
  },
  {
    days: "Days 61-90",
    title: "Scale",
    side: "right",
    tasks: [
      "Hit ₹5K MRR target",
      "Hire first contractor",
      "Begin investor outreach",
      "Finalize pitch deck",
      "Apply to accelerators",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        {/* Header */}
        <div className="roadmap-header">
          <span className="roadmap-subtitle">THE EXECUTION PLAN</span>

          <h2 className="roadmap-heading">
            Your first 90 days, mapped out.
          </h2>

          <p className="roadmap-description">
            Every execution plan comes with a day-by-day roadmap.
            Not vague advice — exact actions, in the right order.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>

          {roadmapData.map((phase, index) => (
            <div
              key={index}
              className={`timeline-item ${phase.side}`}
            >
              {/* Badge */}
              <div className="timeline-badge">
                {phase.days}
              </div>

              {/* Center Dot */}
              <div className="timeline-dot"></div>

              {/* Content */}
              <div className="timeline-content">
                {phase.side === "left" ? (
                  <>
                    <div className="timeline-card">
                      {phase.tasks.map((task, i) => (
                        <div className="task-item" key={i}>
                          <div className="task-number">
                            {i + 1}
                          </div>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>

                    <div className="timeline-title-wrapper">
                      <h3 className="timeline-title">
                        {phase.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="timeline-title-wrapper">
                      <h3 className="timeline-title">
                        {phase.title}
                      </h3>
                    </div>

                    <div className="timeline-card">
                      {phase.tasks.map((task, i) => (
                        <div className="task-item" key={i}>
                          <div className="task-number">
                            {i + 1}
                          </div>
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}