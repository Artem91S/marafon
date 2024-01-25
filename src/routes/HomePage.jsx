import About from "../components/About";
import AboutIntensive from "../components/AboutIntensive";
import EffectiveProgram from "../components/EffectiveProgram";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Information from "../components/Information";
import ReviewsSecond from "../components/Reviews/ReviewsSecond";

function HomePage() {
  return (
    <>
      <Hero />
      <ReviewsSecond />
      <Information />
      <AboutIntensive />
      <EffectiveProgram/>
      <About />
      <FAQ />
    </>
  );
}

export default HomePage;
