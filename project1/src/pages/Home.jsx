import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Header from "../components/Header";
import  Projects from "../components/projects";
import Skills from "../components/skills";
import ContactUs from "../components/ContactUs"




const Home= () => {
  return (
<div>
  <Header/>
    <Banner/>
     <About/>
     <Skills/>
     < Projects/>
     <ContactUs/>
</div>
  );
}

export default Home;
