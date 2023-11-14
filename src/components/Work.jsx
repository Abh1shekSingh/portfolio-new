
import three from "../assets/portfolio.webp"
import four from "../assets/codekaro.webp"
import five from "../assets/cryptorush.webp"
import six from "../assets/opendevcons.webp"
import blog from "../assets/blog.webp"
// import { Link } from "react-router-dom"

const Work = () => {
  return (
    <div className='bg-[#f2f4f6] py-10 flex gap-10 px-4 md:px-0 flex-col justify-center items-center'>

      <div className=" md:w-[70%] mx-auto ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={blog} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">2023</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">React•Node•MongoDB•JWT</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-[#00214d] ">Craftzblog</h2>
          <h2 className="md:text-2xl text-sm text-[#020826]">Full-Stack Development</h2>
        </div>
      </div>

      <div className="text-black grid grid-cols-7 gap-10 md:mx-[5em] mx-auto mt-[0em]">
      
      <div className="md:col-span-4 col-span-7 ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={five} alt="Cryptorush-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">2022</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">React•APIs•Node</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-[#00214d] ">Cryptorush</h2>
          <h2 className="md:text-2xl text-sm text-[#020826]">Front-End Development</h2>
        </div>
      </div>
        


      <div className="md:col-span-3 col-span-7  ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={three} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">2022</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">Next•Tailwind</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-[#00214d] ">Portfolio</h2>
          <h2 className="md:text-2xl text-sm text-[#020826]">Front-End Development</h2>
        </div>
      </div>



      <div className="md:col-span-3 col-span-7">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={four} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy"/>
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">2021</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">React•Tailwind•APIs</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-[#00214d] ">Codekaro</h2>
          <h2 className="md:text-2xl text-sm text-[#020826]">Front-End Development</h2>
        </div>
      </div>



        <div className="md:col-span-4 col-span-7  ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={six} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">2021</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-[#020826]">React•Node•MongoDB•Passport</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-[#00214d] ">OpenDevCons</h2>
          <h2 className="md:text-2xl text-sm text-[#020826]">Full-Stack Development</h2>
        </div>
      </div>
      </div>




      

    </div>
  )
}

export default Work