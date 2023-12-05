import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Information from "./components/Information/Information";
import OurSecret from "./components/OurSecret/OurSecret";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="">
      <Header/>
      <main>
      <Hero/>
      <OurSecret/>
      <Information/>
      <About/>
      <FAQ/>
      <Reviews/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
