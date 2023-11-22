import "./App.css"
import Work from "./components/Work"
import About from "./components/About"
import Navbar from "./components/Navbar"
// import React, { useEffect } from "react"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"
// import locomotiveScroll from "locomotive-scroll";
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"


function App() {
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   });

  //   return () => scroll.destroy();
  // });
  
  

  return (
        <div className="scroll" >
          <Navbar />
          <Hero />
          <About />
          <Aboutme />
          <Work />
          <CTA />
          <Footer />
        </div>   
  )
}

export default App
