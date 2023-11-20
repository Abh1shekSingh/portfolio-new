import "../App.css"
import three from "../assets/portfolio.webp"
import four from "../assets/codekaro.webp"
import five from "../assets/cryptorush.webp"
import six from "../assets/open dev cons.webp"
import blog from "../assets/blog.webp"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
// import { Link } from "react-router-dom"

const Work = () => {

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [inView]);


  return (
    <section ref={ref}  className='w-full my-[8em] md:my-[12em]  flex gap-10 px-4 md:px-0 flex-col justify-center items-center'>
      <h1 className="uppercase md:text-8xl text-4xl font-outfit font-bold">Projects</h1>
      <div className=" md:w-[70%] mx-auto ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl">
          <img src={blog} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-zilla">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl ">2023</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl">React•Node•MongoDB•JWT</h2>
        </div>
        <div className="gap-2 mt-2 font-outfit ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold ">Craftzblog</h2>
          <h2 className="md:text-2xl text-sm ">Full-Stack Development</h2>
        </div>
      </div>

      <div className="text-black grid grid-cols-7 gap-10 md:mx-[5em] mx-auto mt-[0em]">
      
      <div className="md:col-span-4 col-span-7 ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={five} alt="Cryptorush-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-zilla">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">2022</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">React•APIs•Node</h2>
        </div>
        <div className="gap-2 mt-2 font-outfit text-textdark ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold ">Cryptorush</h2>
          <h2 className="md:text-2xl text-sm ">Front-End Development</h2>
        </div>
      </div>
        


      <div className="md:col-span-3 col-span-7  ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={three} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-zilla">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark ">2022</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark ">Next•Tailwind</h2>
        </div>
        <div className="gap-2 mt-2 font-outfit ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textdark ">Portfolio</h2>
          <h2 className="md:text-2xl text-sm text-textdark">Front-End Development</h2>
        </div>
      </div>



      <div className="md:col-span-3 col-span-7">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={four} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy"/>
        </div>
        <div className=" flex gap-2 mt-2 font-zilla">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">2021</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">React•Tailwind•APIs</h2>
        </div>
        <div className="gap-2 mt-2 font-outfit ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textdark">Codekaro</h2>
          <h2 className="md:text-2xl text-sm text-textdark">Front-End Development</h2>
        </div>
      </div>



        <div className="md:col-span-4 col-span-7  ">
        <div className="overflow-hidden trantition duration-300 hover:rounded-3xl ">
          <img src={six} alt="blog-app-image" className="cursor-pointer object-cover  hover:scale-110 transition duration-500 ease-in-out" loading="lazy" />
        </div>
        <div className=" flex gap-2 mt-2 font-zilla">
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">2021</h2>
          <h2 className="border border-textdark md:p-2 p-2 text-sm rounded-full md:text-2xl text-textdark">React•Node•MongoDB•Passport</h2>
        </div>
        <div className="gap-2 mt-2 font-outfit ">
          <h2 className="md:text-5xl text-2xl uppercase font-bold text-textdark ">OpenDevCons</h2>
          <h2 className="md:text-2xl text-sm text-textdark">Full-Stack Development</h2>
        </div>
      </div>
      </div>




      

    </section>
  )
}

export default Work