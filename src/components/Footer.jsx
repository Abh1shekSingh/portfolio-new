import { FaRegArrowAltCircleUp } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section>
      <div className="py-4 px-3 flex justify-between items-center">
        <h3 className="uppercase font-saira font-bold">&copy; {year} Craftingbugs</h3>
        <h3 className="uppercase font-saira font-medium text-center">Developed with ❤️</h3>
        <h3 className="uppercase font-saira font-bold cursor-pointer flex items-center text-right gap-5" onClick={scrollToTop}>Scroll to Top<FaRegArrowAltCircleUp /></h3>
      </div>
    </section>
  )
}
