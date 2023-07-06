import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/Home.scss";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      id="home"
      className="max-w-5xl mx-auto flex flex-col justify-center h-full px-8 text-gray-200 text-2xl font-normal home"
      data-aos="fade-up-right"
    >
      <h2 className="color font-bold mb-3">Hi</h2>
      <p className="mb-3">
        I'm
        <span className="color font-bold"> Ebrahim Abd EL Razik</span>
      </p>
      <p className="mb-3">
        <span className="color font-bold">Front-End </span>Developer
      </p>

      <p className="mb-7 max-w-3xl">
        I'm a Front-End Developer building responsive websites project.
        Proficient in HTML5, CSS3, Bootstrap, Tailwind css, SASS, JavaScript,
        React.js, Redux Toolkit, Next.js, Git and GitHub
      </p>

      <Link
        to="https://drive.google.com/u/0/uc?id=1rHa77y0lQD8FF5QcExSU3q9N-GygiQhF&export=download"
        className="py-3 px-4 w-fit rounded-xl text-xs md:text-lg transition-all duration-300 hover:underline button"
      >
        Download My CV
        <span className="px-3">
          <FontAwesomeIcon icon={faDownload} />
        </span>
      </Link>
    </div>
  );
}
