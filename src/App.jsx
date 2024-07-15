import React from "react";
import Landing from "./Components/Landing/Landing";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import Levels from "./Components/Levels/Levels";
import Gallery from "./Components/Gallery/Gallery";
import Review from "./Components/Review/Review";
import Faq from "./Components/FAQ/Faq";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="mx-auto w-[1440px]">
      <Landing />
      <Services />
      <Banner />
      <Levels />
      <Gallery />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
