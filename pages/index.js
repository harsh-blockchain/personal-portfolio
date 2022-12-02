import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Academics from "../components/Academics";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Hero />
        <About id="about" />
        <Portfolio id="portfolio" />
        <Academics id="academics" />
        <Contact id="contact" />
      </div>
      <Footer />
    </div>
  );
};

export default index;

const styles = {
  container: `bg-[#0e1630] text-white w-full m-0 h-full`,
  wrapper: `max-w-7xl mx-auto`,
};
