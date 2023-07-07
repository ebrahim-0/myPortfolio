import { Link } from "react-scroll";
import "./scss/NavBar.scss";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "./Image/logo.png";
import logoLight from "./Image/logo1.png";

export default function NavBar({ theme, handleMode }) {
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
              className={`p-3 md:px-3 links transition-all duration-500 cursor-pointer capitalize ${
                theme === "black" ? "text-slate-50" : "text-black"
              }`}
            >
              {link}
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div
      className={`border-b-[1px] border-slate-300 light:text-black navbar sticky top-0 transition-all duration-500 p-3 md:p-0 z-20`}
      style={{
        background: `${theme === "black" ? "black" : "white"}`,
        borderColor: `${theme === "black" ? "white" : "black"}`,
      }}
    >
      <div className="container mx-auto md:w-5/6 flex justify-between items-center p-2 md:p-0 text-gray-200">
        <Link to="/" className="text-2xl font-bold font-mono color">
          <img
            src={theme === "black" ? logo : logoLight}
            alt=""
            className="w-56 z-10"
          />
        </Link>

        <div className="flex items-center">
          <nav className="hidden md:flex text-lg navbar">{navLinks()}</nav>
          <div>
            <label
              className={`${
                theme === "black" ? "text-white" : "text-black"
              } swap swap-rotate pr-12`}
            >
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleMode}
                checked={theme === "light" ? false : true}
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? (
              <FontAwesomeIcon
                className={`${
                  theme === "black" ? "text-white" : "text-black"
                } text-3xl relative right-8`}
                icon={faBars}
              />
            ) : (
              <FontAwesomeIcon
                className={`${
                  theme === "black" ? "text-white" : "text-black"
                } text-3xl relative right-8`}
                icon={faXmark}
              />
            )}
          </div>
        </div>
        <nav
          className={
            nav
              ? `absolute top-0 left-0 w-full h-screen ${
                  theme === "black" ? "bg-gray-900" : "bg-gray-300"
                }  opacity-95 flex flex-col justify-center items-center`
              : "hidden"
          }
        >
          {navLinks(handleClick)}
        </nav>
      </div>
    </div>
  );
}
