import React, { useEffect, useState } from "react";
import Landing from "./Components/Landing/Landing";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import Levels from "./Components/Levels/Levels";
import Gallery from "./Components/Gallery/Gallery";
import Review from "./Components/Review/Review";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [loader, setLoader] = useState("fixed");
  const [load, setLoad] = useState("hidden");
  useEffect(() => {
    window.addEventListener("load", function (e) {
      console.log("load website");
      setLoader("hidden");
      setLoad("block");
    });
  });

  return (
    <>
      <div
        id="preloader"
        className={`${loader} absolute z-[100] h-screen w-full bg-black bg-[url('/src/assets/circle-loader-gif-2.gif')] bg-[length:200px] bg-center bg-no-repeat`}
      />
      <div className={`mx-auto ${load} w-[1440px]`}>
        <Landing />
        <Services />
        <Banner />
        <Levels />
        <Gallery />
        <Review />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default App;
