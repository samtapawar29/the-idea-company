import "../styles/MarketOpportunity.css";

export default function MarketOpportunity() {
  return (
    <section className="market-section">
      <div className="market-container">

        <div className="market-chart">
          <div className="circle tam">
            <span>TAM<br />₹420B</span>

            <div className="circle sam">
              <span>SAM<br />₹84B</span>

              <div className="circle som">
                <span>SOM<br />₹12B</span>
              </div>
            </div>
          </div>

          <div className="legend">
            <span>○ Total Market </span>
            <span>○ Serviceable </span>
            <span>○ Our Target</span>
          </div>
        </div>

        <div className="market-content">
          <p className="market-tag">MARKET OPPORTUNITY</p>

          <h2>
            Every idea targets a
            <br />
            real, sizable market.
          </h2>

          <p className="market-text">
            Our engine only surfaces ideas in markets with minimum
            ₹1B addressable opportunity and clear founder-sized
            entry points.
          </p>

          <div className="progress-item">
            <div className="label-row">
              <span>Market Size Threshold</span>
              <span>₹1B+ TAM</span>
            </div>
            <div className="progress-bar">
              <div className="fill fill-100"></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="label-row">
              <span>Avg Market Size</span>
              <span>₹42B TAM</span>
            </div>
            <div className="progress-bar">
              <div className="fill fill-80"></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="label-row">
              <span>Ideas passing analyst review</span>
              <span>23%</span>
            </div>
            <div className="progress-bar">
              <div className="fill fill-23"></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="label-row">
              <span>Avg time-to-first-revenue</span>
              <span>67 days</span>
            </div>
            <div className="progress-bar">
              <div className="fill fill-55"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}