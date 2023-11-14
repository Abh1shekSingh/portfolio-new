import { motion } from "framer-motion"
const Home = () => {
  const longWord = "Sesquipedalian"
  const letters = longWord.split("");
  return (
    
    <div
      className="text-[#00214d] w-[100%] h-[100vh] relative overflow-hidden ">
      
      <h1 className="text-4xl md:text-8xl font-syne font-bold leading-[57px] relative top-[10rem] pr-[2em] left-[2rem] md:left-[11rem]">
        <span className="overflow-hidden block">
          <motion.span initial={{y:100}} animate={{y:0}} transition={{duration:0.3 }} className="block">I make websites that </motion.span>
        </span>

        <span className="overflow-hidden block">
          <motion.span initial={{y:100}} animate={{y:0}} transition={{duration:0.3, delay:0.5}} className="block">load <span className ="text-[#808080]">faster</span> than you can </motion.span>
        </span>

        <span className="overflow-hidden block">
        <motion.span initial={{y:100}} animate={{y:0}} transition={{duration:0.3, delay:1}} className="block">
        say &apos;
        {letters.map((letter, index) => (
        <motion.p key={index} whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 10, -10, 0] }} className="longWord inline-block cursor-pointer text-[#808080]">
            {letter}
        </motion.p>
        ))}
        </motion.span>
        </span>
      </h1>
    </div>
  )
}

export default Home