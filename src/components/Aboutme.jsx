import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import developer from "../assets/bust-mask-8.svg"

const Aboutme = () => {
  

  return (
    <section aria-label="aboutme" className="w-full flex flex-col justify-center items-center">
      <h2 className="">
        <span className="block overflow-hidden">
          <motion.span
            
            className="block md:text-8xl text-4xl uppercase font-outfit font-bold text-textdark"
          >
            About Me
          </motion.span>
        </span>
      </h2>
      <div className='mt-10 flex flex-col justify-center items-start gap-8 md:flex-row lg:gap-10'>
        <div className='top-28 overflow-hidden md:mx-0 mx-auto w-[55%] rounded-md md:sticky md:w-[30%]'>
          <img loading='lazy' className='h-auto w-full rounded-md object-cover object-center md:aspect-auto' src={developer} width="600" height="800" alt='portrait image of developer doing somthing' />
        </div>
        <div className='top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2 '>
          <div className='w-full space-y-4  space-x-4 2xl:space-y-10'>
            <h3 className='translate-y-1 px-4 text-3xl 2xl:text-7xl font-bold leading-tight'>A brief intro, Who am I?</h3>
            <p className='2xl:text-4xl text-xl translate-y-1 font-zilla'>
              I&apos;m a Full Stack Developer, tech blogger based in India. <br></br><br></br>
              I specialize in the MERN tech stack. With a passion for problem solving, I&apos;ve tackled over 900+ coding problems on Leetcode, reaching rank of 4172 and peak rating of 1500+ 😎. <br></br><br></br>
              Beyond the screen, I thrive on collaboration. Whether it&apos;s bringing concepts to life or optimizing code, I&apos;m committed to delivering high-quality results. Explore my portfolio to see my dedication to excellence. Let&apos;s connect and build something remarkable together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
