import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Information from "./components/Information/Information";
import EffectiveProgram from "./components/EffectiveProgram";
// import Reviews from "./components/Reviews/Reviews";
import ReviewsSecond from "./components/Reviews/ReviewsSecond";
import AboutIntensive from "./components/AboutIntensive";

function App() {
  return (
    <div className="">
      <Header/>
      <main>
      <Hero/>
      <AboutIntensive/>
      <EffectiveProgram/>
      <Information/>
      <About/>
      <FAQ/>
      <ReviewsSecond/>
      {/* <Reviews/> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
