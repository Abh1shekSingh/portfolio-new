/* eslint-disable react/prop-types */
import React  from "react"
import Navbar from "./Navbar"
import { Footer } from "./Footer"

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </React.Fragment>
  )
}

export default Layout