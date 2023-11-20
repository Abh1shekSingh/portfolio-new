
import { motion } from "framer-motion"
import { PiDevToLogoFill } from "react-icons/pi";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  
  return (
    <motion.nav initial={{y:-250}} animate={{y:0}} transition={{duration:2, ease:'easeInOut'}} className="dark:bg-bgdark transition-all text-textlight duration-700 dark:text-textdark fixed top-0 z-20 w-full bg-bglight flex py-3 px-5 md:px-[9em] justify-between items-center ">
        <a href="/">
            <div className="flex justify-center items-center">
                <h1 className="font-labelle text-2xl font-bold md:text-3xl underline">Craftingbugs</h1>
            </div>
        </a>
        <div className="flex md:gap-10 gap-4 text-3xl">
            <a className="cursor-pointer" href="https://github.com/Abh1shekSingh"><SiGithub /></a>
            <a className="cursor-pointer" href="https://www.linkedin.com/in/craftingbugs/"><FaLinkedin /></a>
            <a className="cursor-pointer" href="https://dev.to/craftingbugs"><PiDevToLogoFill /></a>
        </div>
    </motion.nav>
  )
}

export default Navbar