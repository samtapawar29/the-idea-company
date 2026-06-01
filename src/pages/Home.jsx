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
      <Hero />
      <HowItWorks />
      <Software />
      <QualityFilter />
      <MarketOpportunity />
      <Roadmap />
      <Results />
      <Pricing />
      <Apps />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;