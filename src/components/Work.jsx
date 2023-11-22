import "../App.css"
import three from "../assets/789shots_so.webp"
import four from "../assets/686shots_so.webp"
import five from "../assets/878shots_so.webp"
import six from "../assets/221shots_so.webp"
import blog from "../assets/578shots_so.webp"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Work = () => {

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.classList.add('dark');
    } 
  }, [inView]);


  return (
    <section ref={ref} className='w-full my-[8em] md:my-[12em]  flex gap-10 px-4 md:px-0 flex-col justify-center items-center'>
      <h1 className="uppercase md:text-8xl text-4xl font-saira font-bold">
        <span className="block overflow-hidden">
          <motion.span initial={{y:200}} animate={{y: inView ? 0 : 100}} transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }} className="block">Projects</motion.span>
        </span>
      </h1>

      <Link to="https://craftzblog.vercel.app" target="_blank" rel="noopener noreferrer" className=" md:w-[70%] mx-auto "><div >
        <div className="overflow-hidden trantition duration-700 hover:rounded-3xl">
          <img src={blog} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-700 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-saira">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl ">2023</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl">React•Node•MongoDB•JWT</h2>
        </div>
        <div className="gap-2 mt-2 font-saira ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold ">Craftzblog</h2>
          <h2 className="md:text-2xl text-sm ">Full-Stack Development</h2>
        </div>
      </div></Link>

      <div className="text-black grid grid-cols-7 gap-10 md:mx-[5em] mx-auto mt-[0em]">
      
      <Link to="https://cryptorushh.netlify.app/" target="_blank" rel="noopener noreferrer" className="md:col-span-4 col-span-7 " ><div >
        <div className="overflow-hidden trantition duration-700 hover:rounded-3xl ">
          <img src={five} alt="Cryptorush-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-700 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-saira">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">2022</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">React•APIs•Node</h2>
        </div>
        <div className="gap-2 mt-2 font-saira text-textdark ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold ">Cryptorush</h2>
          <h2 className="md:text-2xl text-sm ">Front-End Development</h2>
        </div>
      </div></Link>
        


      <Link to="https://client-portfolio-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="md:col-span-3 col-span-7  "><div >
        <div className="overflow-hidden trantition duration-700 hover:rounded-3xl ">
          <img src={three} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-700 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-saira">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark ">2022</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark ">Next•Tailwind</h2>
        </div>
        <div className="gap-2 mt-2 font-saira ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textdark ">Portfolio</h2>
          <h2 className="md:text-2xl text-sm text-textdark">Front-End Development</h2>
        </div>
      </div></Link>



      <Link to="https://codeekaro.netlify.app/" target="_blank" rel="noopener noreferrer" className="md:col-span-3 col-span-7"><div >
        <div className="overflow-hidden trantition duration-700 hover:rounded-3xl ">
          <img src={four} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-700 ease-in-out" loading="lazy"/>
        </div>
        <div className=" flex gap-2 mt-2 font-saira">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">2021</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">React•Tailwind•APIs</h2>
        </div>
        <div className="gap-2 mt-2 font-saira ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textdark">Codekaro</h2>
          <h2 className="md:text-2xl text-sm text-textdark">Front-End Development</h2>
        </div>
      </div></Link>



        <Link to="https://opendevcons.netlify.app/" target="_blank" rel="noopener noreferrer" className="md:col-span-4 col-span-7  "><div >
        <div className="overflow-hidden trantition duration-700 hover:rounded-3xl ">
          <img src={six} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-700 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-saira">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">2021</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">React•Node•MongoDB•Passport</h2>
        </div>
        <div className="gap-2 mt-2 font-saira ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textdark ">OpenDevCons</h2>
          <h2 className="md:text-2xl text-sm text-textdark">Full-Stack Development</h2>
        </div>
      </div></Link>
      </div>




      

    </section>
  )
}

export default Work