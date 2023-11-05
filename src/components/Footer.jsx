import { Link } from "react-router-dom"
import logo from  "../assets/logo.svg"

export const Footer = () => {
  return (
    <div className="md:px-[2em] text-[#020826] flex flex-col md:flex-row justify-center items-center md:justify-between mt-[2em] gap-2 md:mt-[15em]">
      <img src={logo} alt="" className="w-[60px]" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-[#716040] tracking-wider font-nunito text-md uppercase">
        <Link to="https://dev.to/craftingbugs"><p>Dev.to</p></Link>
        <Link to="https://www.linkedin.com/in/craftingbugs/"><p>LinkedIn</p></Link>
        <Link to="https://leetcode.com/abhishek210702/"><p>Leetcode</p></Link>
        <Link to="https://github.com/Abh1shekSingh"><p>GitHub</p></Link>
      </div>
    </div>
  )
}
