import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/Home.scss";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center text-gray-200 text-xl md:text-5xl text-center font-normal home"
      data-aos="fade-up-right"
    >
      <h2 className="color font-bold mb-7">Hi</h2>
      <p className="mb-7">
        I'm
        <span className="color font-bold"> Ebrahim Abd EL Razik</span>
      </p>
      <p className="mb-7">
        <span className="color font-bold">Front-End </span>Developer
      </p>
      <a
        href="https://drive.google.com/u/0/uc?id=1rHa77y0lQD8FF5QcExSU3q9N-GygiQhF&export=download"
        className="py-3 px-4 rounded-xl text-xs md:text-lg transition-all duration-300 hover:underline button"
      >
        Download My CV
        <span className="px-3">
          <FontAwesomeIcon icon={faDownload} />
        </span>
      </a>
    </div>
  );
}
