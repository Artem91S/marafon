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
      {/* <MainContainer> */}
        <Routes>
          <Route path="/" element={<MainContainer />}>
            <Route index element={<HomePage />} />
            <Route path="/offer-contract" element={<OfferContract />} />
          </Route>
        </Routes>
      {/* </MainContainer> */}
 
    </>
  );
}

export default App;
