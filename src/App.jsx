import "./App.css"
import Home from './components/Home'
import Layout from './components/Layout'
import  { BrowserRouter } from "react-router-dom"
import Work from "./components/Work"
import About from "./components/About"
import { CTA } from "./components/CTA"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Home />
        <Work />
        <About />
        <CTA />
      </Layout>
    </BrowserRouter>
  )
}

export default App
