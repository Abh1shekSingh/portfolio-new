import { motion } from 'framer-motion';
import developer from "../assets/bust-mask-8.svg"
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';

const Aboutme = () => {

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
    <section aria-label="aboutme" className="w-full flex flex-col justify-center items-center">
      <h2 className="py-7" ref={ref}>
        <span  className="block overflow-hidden">
          <motion.span
            className="block md:text-8xl text-4xl uppercase font-saira font-bold text-textdark"
            initial={{ y: 100 }}
            animate={{ y: inView ? 0 : 100 }}
            transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
            
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
            <h3 className='translate-y-1 px-4 text-3xl 2xl:text-6xl font-saira font-bold leading-tight'>A brief intro, Who am I?</h3>
            <p className='2xl:text-3xl text-xl translate-y-1 font-saira'>
              Hey, &apos;m Abhishek, your Friendly Neighborhood Developer! <br></br><br></br>
               As a frontend developer, I turn Rasmalai into code and dreams into websites. 
               My superpower? Making sure your UI looks so good that even your cat will be impressed. 😺
               <br></br><br></br>
               When I&apos;m not typing away at my keyboard, you can find me passionately arguing 
               that tabs are superior to spaces (just kidding... or am I?).
               <br></br><br></br>
               Oh, did I mention I&apos;m a part-time wordsmith? 
               Catch me on <a href='https://dev.to/craftingbugs' className='underline'>dev.to</a> where I spill the beans on coding adventures, share tips and tricks, 
               and attempt to make the tech world a little less serious. 
               Because let&apos;s face it, coding is fun, and so are my blogs!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
