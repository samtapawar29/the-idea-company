import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Software from "../components/Software";
import QualityFilter from "../components/QualityFilter";
import MarketOpportunity from "../components/MarketOpportunity";
import Roadmap from "../components/Roadmap";
import Results from "../components/Results";
import Pricing from "../components/Pricing";
import Apps from "../components/Apps";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="software">
        <Software />
      </section>

      <section id="quality-filter">
        <QualityFilter />
      </section>

      <section id="market-opportunity">
        <MarketOpportunity />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="apps">
        <Apps />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </>
  );
}

export default Home;