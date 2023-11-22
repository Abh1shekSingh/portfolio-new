
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
    <section className="w-full flex h-screen justify-center items-center flex-col overflow-hidden">
      <div className=" md:mx-[7em] mx-[1em] ">
        <h1 ref={ref} className="text-[2.5em] md:text-[6em] leading-[1.25em] md:leading-[1.08em] font-zilla ">
          <span>I make websites that load faster than you can say sesquipedalian &apos;</span> <br></br>
           
        </h1>
      </div>
    </section>
  )
}

export default About