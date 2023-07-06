import movieIcon from "./Image/moveIcon.png";
import weatherIcon from "./Image/weatherIcon.png";
import quizIcon from "./Image/quizIcon.png";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export default function Projects({ theme }) {
  return (
    <div
      id="projects"
      className={`container mx-auto md:w-5/6 ${
        theme === "black" ? "text-gray-200" : "text-black"
      } text-xl md:text-5xl projects py-24 mt-7 `}
    >
      <h1 className="font-bold text-4xl md:text-6xl text-center title">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center p-4">
        <div
          className="card flex items-center gap-8  mt-8 p-5 text-xl"
          data-aos="fade-up-right"
        >
          <img src={movieIcon} className="w-28 h-28 " alt="" />

          <div>
            <h4 className="py-5">Movies App</h4>
            <Link
              target="_blank"
              to="https://react-movies-app100.netlify.app/"
              className="px-3 py-2 rounded-xl text-lg transition-all duration-300 hover:underline button"
            >
              Live Demo
            </Link>
          </div>
        </div>
        <div
          className="card flex items-center gap-8  mt-8 p-5 text-xl"
          data-aos="zoom-in-up"
        >
          <img src={weatherIcon} className="w-28 h-28 " alt="" />

          <div>
            <h4 className="py-5">Weather App</h4>
            <Link
              target="_blank"
              to="https://react-weather-app100.netlify.app/"
              className="px-3 py-2 rounded-xl transition-all duration-300 hover:underline button"
            >
              Live Demo
            </Link>
          </div>
        </div>
        <div
          className="card flex items-center gap-8  mt-8 p-5 text-xl"
          data-aos="zoom-out-up"
        >
          <img src={quizIcon} className="w-28 h-28 " alt="" />

          <div>
            <h4 className="py-5"> Quiz App</h4>
            <Link
              target="_blank"
              to="https://quiz-app100.netlify.app/"
              className="px-3 py-2 rounded-xl transition-all duration-300 hover:underline button"
            >
              Live Demo
            </Link>
          </div>
        </div>
        <div
          className="card flex items-center gap-8  mt-8 p-5 text-xl"
          data-aos="zoom-out-up"
        >
          <AiFillGithub className="w-28 h-28" />

          <div>
            <h4 className="py-5">Github Repo</h4>
            <Link
              target="_blank"
              to="https://ebrahim-0.github.io/github-repos/"
              className="px-3 py-2 rounded-xl transition-all duration-300 hover:underline button"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
