import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

import "./scss/Skills.scss";
export default function Skills() {
  return (
    <div
      id="skills"
      className="container mx-auto md:w-5/6 text-gray-200 text-xl md:text-5xl projects py-20 mt-7"
    >
      <h1 className="font-bold text-center text-6xl title">My Skills</h1>
      <div className="skills">
        <div className="mt-11 p-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 skills ">
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <FaHtml5 className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">HTML</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <FaCss3Alt className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">CSS</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <FaSass className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">Sass</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <FaBootstrap className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">Bootstrap</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <SiTailwindcss className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">Tailwind css</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <BiLogoJavascript className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">JavaScript</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <BiLogoReact className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">React</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <TbBrandRedux className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">Redux</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <TbBrandNextjs className="text-7xl" />
            <p className="text-white text-xl md:text-3xl">Next JS</p>
          </div>
          <div
            className="flex flex-col items-center p-4"
            data-aos="zoom-out-up"
          >
            <AiFillGithub className="text-7xl" />
            <p className="text-white text-3xl">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
