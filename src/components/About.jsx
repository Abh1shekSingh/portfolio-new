
import { useEffect } from "react"
import { useInView } from 'react-intersection-observer'

const About = () => {

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
    <section className="w-full flex md:h-screen pb-[3em] mb-[6em] justify-center items-center flex-col overflow-hidden">
      <div ref={ref} className=" md:mx-[7em] mx-[2em] translate-y-10 ">
        <h1 className="text-[3em] md:text-[6em] leading-[1.25em] md:leading-[1.08em] font-saira font-regular ">
          I make websites that load faster than you can say&apos; <span className="text-orange-500">sesquipedalian.</span> <br></br>
           
        </h1>
      </div>
    </section>
  )
}

export default About