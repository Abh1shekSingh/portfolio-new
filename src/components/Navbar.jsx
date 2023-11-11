import instagram from "../assets/Instagram.svg"
import linkedin from "../assets/linkedin.svg"
import devto from "../assets/devto.svg"
import github from "../assets/github.svg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className="text-[#00214d] flex py-5 px-[2em] md:px-[9em] border justify-between items-center">
        <Link to="/">
            <div className="flex justify-center items-center">
                {/* <img src={logo} alt="logo" className="md:w-[70px] hidden md:block " /> */}
                <h1 className="font-labelle text-2xl font-bold md:text-4xl underline">Craftingbugs</h1>
            </div>
        </Link>
        <div className="flex md:gap-10 gap-4 text-3xl text-[#020826]">
            <Link to="https://instagram.com/_abh1sheksingh"><motion.img animate={{ rotate: 0 }} whileHover={{rotate:20, scale:1.2}} transition={{duration:0.2}} src={instagram} alt="instagram-logo"  className="w-[20px] md:w-[30px]" /></Link>
            <Link to="https://github.com/Abh1shekSingh"><motion.img animate={{ rotate: 0 }} whileHover={{rotate:20, scale:1.2}} transition={{duration:0.2}} src={github} alt="github-logo"  className="w-[20px] md:w-[30px]"/></Link>
            <Link to="https://www.linkedin.com/in/craftingbugs/"><motion.img animate={{ rotate: 0 }} whileHover={{rotate:20, scale:1.2}} transition={{duration:0.2}} src={linkedin} alt="linkedin-logo"  className="w-[20px] md:w-[30px]"/></Link>
            <Link to="https://dev.to/craftingbugs"><motion.img animate={{ rotate: 0 }} whileHover={{rotate:20, scale:1.2}} transition={{duration:0.2}} src={devto} alt="devto-logo" className="w-[20px] md:w-[30px]" /></Link>
        </div>
    </nav>
  )
}

export default Navbar