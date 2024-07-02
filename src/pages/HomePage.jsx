import React from "react";
import Banner from "../components/banner/Banner";
import DiveIntoHabot from "../components/diveIntoHabot/DiveIntoHabot";
import HowItWorks from "../components/howItWorks/HowItWorks";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <DiveIntoHabot/>
        <HowItWorks/>
        <Footer/>
    </div>
  );
}

export default HomePage;
