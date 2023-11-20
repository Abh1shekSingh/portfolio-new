import "../App.css"
import three from "../assets/portfolio.webp"
import four from "../assets/codekaro.webp"
import five from "../assets/cryptorush.webp"
import six from "../assets/opendevcons.webp"
import blog from "../assets/blog.webp"
// import { Link } from "react-router-dom"

const Work = () => {


  return (
    <div  className=' py-10 flex gap-10 px-4 md:px-0 flex-col justify-center items-center'>
      <h1 className="uppercase md:text-8xl text-4xl font-syne font-bold">Projects</h1>
      <div className=" md:w-[70%] mx-auto ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl">
          <img src={blog} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">2023</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">React•Node•MongoDB•JWT</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textlight ">Craftzblog</h2>
          <h2 className="md:text-2xl text-sm text-textlight">Full-Stack Development</h2>
        </div>
      </div>

      <div className="text-black grid grid-cols-7 gap-10 md:mx-[5em] mx-auto mt-[0em]">
      
      <div className="md:col-span-4 col-span-7 ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={five} alt="Cryptorush-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">2022</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">React•APIs•Node</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textlight ">Cryptorush</h2>
          <h2 className="md:text-2xl text-sm text-textlight">Front-End Development</h2>
        </div>
      </div>
        


      <div className="md:col-span-3 col-span-7  ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={three} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">2022</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">Next•Tailwind</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textlight ">Portfolio</h2>
          <h2 className="md:text-2xl text-sm text-textlight">Front-End Development</h2>
        </div>
      </div>



      <div className="md:col-span-3 col-span-7">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={four} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy"/>
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">2021</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">React•Tailwind•APIs</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textlight">Codekaro</h2>
          <h2 className="md:text-2xl text-sm text-textlight">Front-End Development</h2>
        </div>
      </div>



        <div className="md:col-span-4 col-span-7  ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={six} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-syne">
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">2021</h2>
          <h2 className="border border-[#020826] md:p-2 p-2 text-sm rounded-full md:text-2xl text-textlight">React•Node•MongoDB•Passport</h2>
        </div>
        <div className="gap-2 mt-2 font-syne ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textlight ">OpenDevCons</h2>
          <h2 className="md:text-2xl text-sm text-textlight">Full-Stack Development</h2>
        </div>
      </div>
      </div>




      

    </div>
  )
}

export default Work