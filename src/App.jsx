import Footer from "./components/Footer";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import FooterBigScreen from "./components/Footer/FooterBigScreen";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import OfferContract from "./routes/OfferContract";
import MainContainer from "./components/ui/MainContainer";

function App() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="https://marafon-rosy.vercel.app/offer-contract" element={<OfferContract />} />
        </Routes>
      </MainContainer>
      {isBigScreen ? <FooterBigScreen /> : <Footer />}
    </>
  );
}

export default App;
