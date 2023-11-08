import one from "../assets/pexels-monstera-production-6289170.webp"
// import two from "../assets/pexels-jaymantri-4805.jpg"
import three from "../assets/pexels-medhat-ayad-383568.webp"
import four from "../assets/japan.webp"
import five from "../assets/catsndogs.webp"
import six from "../assets/pexels-mike-bird-1100008.webp"
import { Link } from "react-router-dom"

const Work = () => {
  return (
    <div className='bg-[#f2f4f6] text-[#020826] pt-7 flex gap-10 px-4 md:px-0 flex-col justify-center items-center'>
      <div className="flex gap-10 flex-col md:flex-row justify-center items-center">
      <Link to="https://craftzblog.vercel.app"><div className="relative group cursor-pointer">
          <img src={six} alt="" className=" md:w-[500px] md:h-[400px] w-[350px] object-cover"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#f9f4ef] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-[#020826] font-archivo font-bold text-3xl md:text-5xl text-center uppercase">Blog Application</p>
            <p className="text-[#020826] font-fira font-semibold mt-7 text-xs md:text-md text-center uppercase">CRUD React Application</p>
          </div>
        </div></Link>

        <Link to="https://cryptorushh.netlify.app"><div className="relative group">
          <img src={one} alt="" className="md:w-[100%] md:h-[400px] w-[350px] object-cover"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#f9f4ef] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-[#020826] font-archivo font-bold text-3xl md:text-5xl text-center uppercase">CryptoRush</p>
            <p className="text-[#020826] font-fira font-semibold mt-7 text-xs md:text-md text-center uppercase">React js Application</p>
          </div>
        </div></Link>
        
      </div>

      <div className="flex gap-10 flex-col md:flex-row justify-center items-center">
      <Link to="https://opendevcons.netlify.app/"><div className="relative group">
        <img src={three} alt="" className="md:w-[100%] md:h-[400px] w-[350px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#f9f4ef] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-[#020826] font-archivo font-bold text-3xl md:text-5xl text-center uppercase">Open Dev Cons</p>
            <p className="text-[#020826] font-fira font-semibold mt-7 text-xs md:text-md text-center uppercase">Full Stack React Application</p>
          </div>
        </div></Link>

        <Link to="https://codeekaro.netlify.app/"><div className="relative group">
        <img src={four} alt="" className=" md:w-[500px] md:h-[400px] w-[350px] object-cover"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#f9f4ef] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-[#020826] font-archivo font-bold text-3xl md:text-5xl text-center uppercase">CodeKaro</p>
            <p className="text-[#020826] font-fira font-semibold mt-7 text-xs md:text-md text-center uppercase">Front-End Application with API </p>
          </div>
        </div></Link>
        
        
      </div>

      <div className="flex gap-10 flex-col md:flex-row justify-center items-center">
      <Link to="https://enkrypttchat.netlify.app/"><div className="relative group">
          <img src={five} alt="" className="md:w-[500px] md:h-[400px] w-[350px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#f9f4ef] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-[#020826] font-archivo font-bold text-3xl md:text-5xl text-center uppercase">KryptoChat</p>
            <p className="text-[#020826] font-fira font-semibold mt-7 text-xs md:text-md text-center uppercase">Full stack Real-time chat Application</p>
          </div>
        </div></Link>

        <Link to="https://client-portfolio-nine.vercel.app/" ><div className="relative group">
          <img src={six} alt="" className="md:w-[100%] md:h-[400px] w-[350px] object-cover"/>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 bg-[#f9f4ef] bg-opacity-50 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-[#020826] font-archivo font-bold text-3xl md:text-5xl text-center">Portfolio</p>
            <p className="text-[#020826] font-fira font-semibold mt-7 text-xs md:text-md text-center uppercase" >Freelance work</p>
          </div>
        </div></Link>
        
        
      </div>

      <div>
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Work