

export const Footer = () => {
  return (
    <div  className="md:px-[5em] py-[1em] bg-[#00214d] flex flex-col md:flex-row justify-center items-center md:justify-between mt-[2em] gap-2 md:mt-[15em]">
      <div className="flex justify-center items-center">
      {/* <img src={logo} alt="" className="w-[60px]" /> */}
      <h1 className="font-syne font-bold text-2xl">Craftingbugs</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-[#fffffe] tracking-wider font-syne text-md ">
        <p>©2023 Craftingbugs. All Rights Reserved.</p>
      </div>
    </div>
  )
}
