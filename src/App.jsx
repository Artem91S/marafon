import About from "./components/About/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Information from "./components/Information";
import EffectiveProgram from "./components/EffectiveProgram";
import Reviews from "./components/Reviews/Reviews";
import ReviewsSecond from "./components/Reviews/ReviewsSecond";
import AboutIntensive from "./components/AboutIntensive";

function App() {
  return (
    <>
      <Header/>
      <main>
      <Hero/>
      <ReviewsSecond/>
      <AboutIntensive/>
      <EffectiveProgram/>
      <Information/>
      <About/>
      <FAQ/>
      {/* <Reviews/> */}
      </main>
      <Footer/>
    </>
  );
}

export default App;
