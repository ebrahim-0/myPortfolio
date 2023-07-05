import { Link } from "react-scroll";
import "./scss/NavBar.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "./Image/logo.png";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const linkNav = ["home", "about", "projects", "skills", "contact"];

  const navLinks = (mobile) => {
    return (
      <>
        {linkNav.map((link, i) => {
          return (
            <Link
              key={i}
              to={link}
              onClick={mobile}
              activeClass="active"
              spy={true}
              smooth
              offset={-50}
              duration={500}
              className="p-3 md:px-3 links transition-all duration-500 cursor-pointer capitalize"
            >
              {link}
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div className="border-b-[1px] bg-black border-slate-300 navbar sticky top-0 transition-all duration-500 p-5 z-20">
      <div className="container mx-auto md:w-5/6 flex justify-between items-center p-2 md:p-0 text-gray-200">
        <Link to="/" className="text-2xl font-bold font-mono color">
          <img src={logo} alt="" className="w-56 z-10" />
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
        <nav className="hidden md:flex text-lg navbar">{navLinks()}</nav>

        <nav
          className={
            nav
              ? "absolute top-0 left-0 w-full h-screen bg-gray-900 opacity-95 flex flex-col justify-center items-center"
              : "hidden"
          }
        >
          {navLinks(handleClick)}
        </nav>
      </div>
    </div>
  );
}
