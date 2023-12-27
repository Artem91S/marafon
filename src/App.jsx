import About from "./components/About";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Information from "./components/Information";
import EffectiveProgram from "./components/EffectiveProgram";
// import Reviews from "./components/Reviews/Reviews";
import ReviewsSecond from "./components/Reviews/ReviewsSecond";
import AboutIntensive from "./components/AboutIntensive";
import { useMediaQuery } from 'react-responsive'
import FooterBigScreen from "./components/Footer/FooterBigScreen";

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

  return (
    <>
      <Header />
      <main className="lg:grid lg:grid-cols-8">
        <div className="hidden lg:block bg-gradient-to-b from-btnColor/50 to-btnColor/5 col-span-1"></div>
        <div className=" col-span-6">
          <Hero />
          <ReviewsSecond />
          <Information />
          <AboutIntensive />
          <EffectiveProgram />
          <About />
          <FAQ />
          {/* <Reviews /> */}
        </div>
        <div className="hidden lg:block bg-gradient-to-b from-btnColor/50 to-btnColor/5 col-span-1"></div>
      </main>
      {isBigScreen ? <FooterBigScreen/> :<Footer />}
    </>
  );
}

export default App;
