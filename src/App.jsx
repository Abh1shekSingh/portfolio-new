import "./App.css"
import Work from "./components/Work"
import About from "./components/About"
// import { CTA } from "./components/CTA"
import Navbar from "./components/Navbar"
import React, { useEffect } from "react"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"
import locomotiveScroll from "locomotive-scroll";


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
        
        </div>   
  )
}

export default App
