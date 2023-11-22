import { motion } from "framer-motion";
import bg from "../assets/heroimg-64242f08.webp";

const Hero = () => {
  
  return (
    <div className="w-full  h-screen flex justify-center items-center">
      <h1 className="w-full z-10 space-y-16 uppercase text-accent-300 text-[13vw] 2xl:text-[11vw] flex flex-col justify-between items-center font-saira font-black ">
        <span className="block overflow-hidden">
          <motion.span initial={{y:250}} animate={{y:0}} transition={{duration:2, ease:'easeInOut', type:'easeIn'}}  className="block transition-all duration-500 dark:text-textdark  text-textlight">Abhishek.</motion.span>
        </span>

        <span className="block overflow-hidden">
          <motion.span initial={{y:250}} animate={{y:0}} transition={{duration:2, ease:'easeInOut', type:'easeIn'}} className="block transition-all duration-500 dark:text-textdark  font-outline-4 stroked ">Im Abhishek.</motion.span>
        </span>

        <span className="block overflow-hidden">
          <motion.span  initial={{y:250}} animate={{y:0}} transition={{duration:2, ease:'easeInOut', type:'easeIn'}} className="block transition-all duration-500 dark:text-textdark text-textlight">Abhishek.</motion.span>
        </span>
      </h1>
      <motion.div initial={{scale:1.6}} animate={{scale:1}} transition={{duration:3, ease:'easeInOut', type:'easeIn'}} className="absolute mx-auto w-[55%] overflow-hidden rounded-md ">
        <motion.img initial={{scale:2}} animate={{scale:1}} transition={{duration:3, ease:'easeInOut', type:'easeIn', delay:0.8}} src={bg} alt="abstract background image" className="scale-110 aspect-[11/16] sm:aspect-[5/6] md:aspect-[7/7] rounded-md opacity-50 lg:aspect-[11/9] w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Hero;
