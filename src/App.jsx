import "./App.css"
import Work from "./components/Work"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { useEffect } from "react"


function App() {
  useEffect( () => {

    (

      async () => {

          const LocomotiveScroll = (await import('locomotive-scroll')).default

          const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])

  return (
        <BrowserRouter >
          <Navbar />
          <Hero />
          <About />
          <Aboutme />
          <Work />
          <CTA />
          <Footer />
        </BrowserRouter>   
  )
}

export default App
