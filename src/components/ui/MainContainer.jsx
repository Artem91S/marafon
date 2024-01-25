import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import FooterBigScreen from '../Footer/FooterBigScreen'
import Footer from '../Footer'
function MainContainer({ children }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      <Header />

      <main className="lg:grid lg:grid-cols-8">
        <div className="hidden lg:block bg-gradient-to-b from-btnColor/50 to-btnColor/5 col-span-1"></div>
        <div className=" col-span-6">
          <Outlet/>
        </div>
        <div className="hidden lg:block bg-gradient-to-b from-btnColor/50 to-btnColor/5 col-span-1"></div>
      </main>

      {isBigScreen ? <FooterBigScreen /> : <Footer />}
    </>
  );
}

export default MainContainer;
