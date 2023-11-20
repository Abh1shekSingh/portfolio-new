
import { useEffect } from "react"
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {

  const longWord = 'sesquipedalian'
  const letters = longWord.split('')

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
    <section className="w-full flex justify-center items-center h-screen flex-col overflow-hidden">
      <div className=" md:mx-[7em] mx-[1em]  ">
        <h1 ref={ref} className="text-[2.5em] md:text-[6em] leading-[1.25em] md:leading-[1.08em] font-syne font-bold">
          <span>I make websites that load faster than you can say &apos;</span> <br></br>
          {letters.map((letter, index) => (
            <motion.p className="inline-block cursor-pointer" initial={{rotate:0, scale:1}} whileHover={{rotate:[0,-10,10,0], scale:[1,1.1, 0.8, 1]}} transition={{duration:0.3 ,ease:"easeInOut"}} key={index}>{letter}</motion.p>
          ))}
        </h1>
      </div>
    </section>
  )
}

export default About