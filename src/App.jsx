import "./App.css"
import Work from "./components/Work"
import About from "./components/About"
import { CTA } from "./components/CTA"
import Navbar from "./components/Navbar"
import React from "react"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"




function App() {


  return (
        <React.Fragment>
          <Navbar />
          <Hero />
          <About />
          {/* <Aboutme /> */}
          <Work />
        
        </React.Fragment>   
  )
}

export default App
