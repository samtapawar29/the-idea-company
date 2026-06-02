import "../styles/Software.css";

export default function Software() {
  return (
    
    <section className="software-section">
<div className="software-container">
<div className="software-header">
    <p className="software-label">
      THE SOFTWARE
    </p>

    <h2 className="software-title">
      Your idea. Your plan. Your dashboard.
    </h2>

    <p className="software-description">
      Every idea comes with a complete, analyst-verified execution plan —
      tailored to you. This is what you'll find waiting in your account.
    </p>
  </div>
{/* Dashboard */}
</div>
      <div className="software-container">

        {/* Browser Header */}
        <div className="software-browser">
          <div className="browser-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="browser-text">
            the-idea-company.app / dashboard
          </div>
        </div>

        <div className="software-layout">

          {/* Sidebar */}
          <aside className="software-sidebar">

            <div className="sidebar-logo">
              <div className="logo-square">S</div>
              <span>SoE Dashboard</span>
            </div>

            <div className="sidebar-menu">
              <div className="menu-item active">
                📊 My Ideas
              </div>

              <div className="menu-item">
                📄 Execution Plans
              </div>

              <div className="menu-item">
                📈 Market Reports
              </div>

              <div className="menu-item">
                👥 Analyst Team
              </div>

              <div className="menu-item">
                ⚙ Settings
              </div>
            </div>

            <div className="analyst-status">
              <h4>Analyst Status</h4>
              <p>● Reviewing your plan</p>
            </div>

          </aside>

          {/* Main Content */}

          <div className="software-main">

            <div className="software-topbar">

              <h3>← Startup Idea Card</h3>

              <div className="topbar-right">
                <button>Select Idea ▼</button>
                <span>🔔</span>
                <div className="profile-circle">A</div>
              </div>

            </div>

            {/* Tabs */}

            <div className="idea-tabs">

              <button className="active">
                LogiTrack B2B
              </button>

              <button>
                NutriAI Platform
              </button>

              <button>
                PayFast Africa
              </button>

            </div>

            {/* Cards */}

            <div className="software-grid">

              <div className="software-card">
                <div className="card-header">
                  <h4>Market Analysis</h4>
                  <span>VERIFIED</span>
                </div>

                <p>
                  Addressable market of ₹42B with
                  23% YoY growth. Primary competitors
                  lack mobile-first approach — clear
                  entry point identified.
                </p>
              </div>

              <div className="software-card">
                <div className="card-header">
                  <h4>Revenue Model</h4>
                  <span>VERIFIED</span>
                </div>

                <p>
                  SaaS subscription at ₹299/mo per
                  enterprise client. Unit economics:
                  LTV ₹14,400 · CAC ₹620.
                </p>
              </div>

              <div className="software-card">
                <div className="card-header">
                  <h4>Execution Roadmap</h4>
                  <span className="ready">
                    READY
                  </span>
                </div>

                <p>
                  Day 1–30: MVP + legal setup.
                  Day 31–60: Pilot customers.
                  Day 61–90: Launch campaign.
                </p>
              </div>

              <div className="software-card">
                <div className="card-header">
                  <h4>Go-To-Market</h4>
                  <span className="ready">
                    READY
                  </span>
                </div>

                <p>
                  LinkedIn outreach engine +
                  outbound email sequence targeting
                  logistics managers.
                </p>
              </div>

            </div>

          </div>

          {/* Right Panel */}

          <aside className="software-right">

            <div className="revenue-box">
              <span>Proj. Revenue</span>
              <h2>₹130K</h2>
              <p>↗ Month 8</p>
            </div>

            <div className="graph-area">
              <svg viewBox="0 0 200 120">
                <path
                  d="M0 110 C40 110,70 100,100 80 C130 60,150 35,200 0"
                  fill="none"
                  stroke="#d8b33f"
                  strokeWidth="3"
                />
              </svg>
            </div>

            <h5>PLAN STATUS</h5>

            <div className="status-item">
              <span>Idea Brief</span>
              <span>100%</span>
            </div>

            <div className="progress">
              <div style={{ width: "100%" }}></div>
            </div>

            <div className="status-item">
              <span>Market Analysis</span>
              <span>100%</span>
            </div>

            <div className="progress">
              <div style={{ width: "100%" }}></div>
            </div>

            <div className="status-item">
              <span>90-Day Plan</span>
              <span>82%</span>
            </div>

            <div className="progress">
              <div style={{ width: "82%" }}></div>
            </div>

            <div className="status-item">
              <span>Unit Economics</span>
              <span>65%</span>
            </div>

            <div className="progress">
              <div style={{ width: "65%" }}></div>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}