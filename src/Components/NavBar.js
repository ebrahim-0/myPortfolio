import { Link } from "react-scroll";
import "./scss/NavBar.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const navLinks = () => {
    return (
      <>
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth
          onClick={handleClick}
          offset={-75}
          duration={500}
          className="p-3 md:px-3 links transition-all  duration-500 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth
          onClick={handleClick}
          offset={-150}
          duration={500}
          className="p-3 md:px-3  links transition-all  duration-500 cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth
          onClick={handleClick}
          offset={-150}
          duration={500}
          className="p-3 md:px-3  links transition-all  duration-500 cursor-pointer"
        >
          Skills
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth
          onClick={handleClick}
          offset={-150}
          duration={500}
          className="p-3 md:px-3  links transition-all  duration-500 cursor-pointer"
        >
          Contact
        </Link>
      </>
    );
  };

  return (
    <div className="border-b-[1px] bg-black border-slate-300 navbar sticky top-0 transition-all duration-500 p-5">
      <div className="container mx-auto md:w-5/6 flex justify-between items-center  text-gray-200">
        <Link to="/" className="text-2xl font-bold">
          Ebrahim Abd EL Razik
        </Link>
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? (
            <FontAwesomeIcon
              className=" text-3xl relative right-8"
              icon={faBars}
            />
          ) : (
            <FontAwesomeIcon
              className=" text-3xl relative right-8"
              icon={faXmark}
            />
          )}
        </div>
        <nav className="hidden md:flex text-lg">{navLinks()}</nav>

        <nav
          className={
            nav
              ? "absolute top-0 left-0 w-full h-screen bg-gray-900 opacity-95 flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          {navLinks()}
        </nav>
      </div>
    </div>
  );
}
