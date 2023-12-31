import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaCheck } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";

export const CTA = () => {
  const emailRef = useRef(null);
  const [copy, setCopy] = useState(false);
  const [hover, setHover] = useState(false);

  const copyToClipboard = () => {
    const emailText = "abhinav210702@gmail.com";
    navigator.clipboard.writeText(emailText).then(() => {
      setCopy(true);
      setTimeout(() => setCopy(false), 3000); 
    })
    .catch(err => {
      console.error('Error copying to clipboard:', err);
    });
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      document.documentElement.classList.add('dark');
    } 
  }, [inView]);

  
  return (
    <section ref={ref} className="overflow-hidden w-full h-screen flex justify-center items-center">
      <div className="dark:text-textdark  mt-[7em]">
          <div className="flex flex-col gap-8 justify-center items-center">
              <h1 className="font-saira text-center font-bold text-5xl md:text-7xl ">I&apos;m open to work.</h1>
              <p className="font-saira dark:text-textdark text-textlight 2xl:text-3xl text-xl text-center py-4 md:px-[12em]"> Let&apos;s build something together – a website, an app, or maybe just a really impressive sandcastle. Reach out, and let&apos;s make the internet a better (and slightly funnier) place!</p>
              <p onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} ref={emailRef} className="flex justify-center items-center border py-4 px-8 rounded-full hover:bg-bglight hover:text-zinc-800  transition-all duration-700 2xl:text-3xl text-xl md:mt-[2em] font-saira mt-[1em] underline cursor-pointer mb-[1em] gap-2" onClick={copyToClipboard}>{!hover && <FaHashtag/>}{hover ? "@abhinav210702@gmail.com" : "Open To Work"}{copy && <FaCheck />}</p>
          </div>
      </div>
    </section>
  )
}
