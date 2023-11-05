import {FaDev, FaLinkedin,FaGithubSquare} from "react-icons/fa" 
import logo from  "../assets/logo.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="text-[#020826] flex p-5 justify-between items-center">
        <Link to="/">
            <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className="w-[60px] " />
                <h1 className="font-labelle  text-2xl">Craftingbugs</h1>
            </div>
        </Link>
        <div className="flex gap-5 text-2xl text-[#020826]">
            <Link to="https://github.com/Abh1shekSingh"><FaGithubSquare /></Link>
            <Link to="https://www.linkedin.com/in/craftingbugs/"><FaLinkedin /></Link>
            <Link to="https://dev.to/craftingbugs"><FaDev /></Link>
        </div>
    </nav>
  )
}

export default Navbar