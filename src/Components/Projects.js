import movieIcon from "./Image/moveIcon.png";
import weatherIcon from "./Image/weatherIcon.png";
import quizIcon from "./Image/quizIcon.png";

export default function Projects() {
  return (
    <div
      id="projects"
      className="container mx-auto md:w-5/6 text-gray-200 text-xl md:text-5xl projects py-24 mt-7 "
    >
      <h1 className="font-bold text-6xl text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center p-4">
        <div className="card flex items-center gap-8  mt-8 p-5 text-xl">
          <img src={movieIcon} className="w-28 h-28 " alt="" />

          <div>
            <h4 className="py-5">Movies App</h4>
            <a
              target="_blank"
              href="https://react-movies-app100.netlify.app/"
              className="px-3 py-1 rounded-xl text-lg transition-all duration-300 hover:underline button"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="card flex items-center gap-8  mt-8 p-5 text-xl">
          <img src={weatherIcon} className="w-28 h-28 " alt="" />

          <div>
            <h4 className="py-5">Weather App</h4>
            <a
              target="_blank"
              href="https://react-weather-app100.netlify.app/"
              className="px-3 py-1 rounded-xl transition-all duration-300 hover:underline button"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="card flex items-center gap-8  mt-8 p-5 text-xl">
          <img src={quizIcon} className="w-28 h-28 " alt="" />

          <div>
            <h4 className="py-5"> Quiz App</h4>
            <a
              target="_blank"
              href="https://quiz-app100.netlify.app/"
              className="px-3 py-1 rounded-xl transition-all duration-300 hover:underline button"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
