import { motion } from "framer-motion"
const Home = () => {
  const longWord = "Sesquipedalian"
  const letters = longWord.split("");
  return (
    
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }} className="text-[#00214d] w-[100%] h-[100vh] relative overflow-hidden ">
      <h1 className="text-4xl md:text-8xl font-syne font-bold leading-[57px] relative top-[10rem] pr-[2em] left-[2rem] md:left-[11rem]">I make websites that load <span className ="text-[#808080]">faster</span> than you can say &apos;
        {letters.map((letter, index) => (
        <motion.p key={index} whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 10, -10, 10, -10, 0] }} className="inline-block text-[#808080]">
            {letter}
        </motion.p>
        ))}
      </h1>
    </motion.div>
  )
}

export default Home