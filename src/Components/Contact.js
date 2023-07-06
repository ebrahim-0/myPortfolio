import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import "./scss/Contact.scss";
import { Link } from "react-router-dom";

export default function Contact({ theme }) {
  return (
    <div
      id="contact"
      className={`container mx-auto md:w-5/6 ${
        theme === "black" ? "text-gray-200" : "text-black"
      } text-xl md:text-4xl projects py-24 mt-7 `}
    >
      <h1 className="font-bold text-4xl md:text-6xl title text-center">
        Contact US
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 p-16">
        <Link
          to="https://github.com/ebrahim-0"
          target="_blank"
          className="w-fit contact-link flex gap-6 hover:underline items-center "
          data-aos="zoom-out-up"
        >
          <AiFillGithub className="transition-all duration-300" />
          <span className="transition-all duration-300">Github</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ebrahim-abdelrazik2020/"
          target="_blank"
          className="w-fit contact-link flex gap-6 hover:underline items-center "
          data-aos="zoom-out-up"
        >
          <BsLinkedin className="transition-all duration-300" />
          <span className="transition-all duration-300">LinkedIn</span>
        </Link>
        <Link
          href="https://www.facebook.com/ebrahimabdelrazik0"
          target="_blank"
          className="w-fit contact-link flex gap-6 hover:underline items-center "
          data-aos="zoom-out-up"
        >
          <BsFacebook className="transition-all duration-300" />
          <span className="transition-all duration-300">Facebook</span>
        </Link>
        <Link
          href="mailto:ebrahimabdelrazik2002@gmail.com"
          className="w-fit contact-link flex gap-6 hover:underline items-center "
          data-aos="zoom-out-up"
        >
          <HiOutlineMail className="transition-all duration-300" />
          <span className="transition-all duration-300">Email</span>
        </Link>
        <Link
          href="https://wa.me/201032868845"
          target="_blank"
          className="w-fit contact-link flex gap-6 hover:underline items-center "
          data-aos="zoom-out-up"
        >
          <BsWhatsapp className="transition-all duration-300" />
          <span className="transition-all duration-300">Whatsapp</span>
        </Link>
      </div>
    </div>
  );
}
