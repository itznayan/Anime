import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import DetailSection from "./components/DetailSection";
const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <DetailSection />
      <Trending />
    </>
  );
};

export default App;
