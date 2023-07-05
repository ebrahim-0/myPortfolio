import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

export default function Contact() {
  return (
    <div
      id="contact"
      className="container mx-auto md:w-5/6 text-gray-200  text-xl md:text-4xl projects py-24 mt-7 "
    >
      <h1 className="font-bold text-4xl md:text-6xl title text-center">
        Contact US
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 p-16  transition-all duration-400">
        <a
          href="https://github.com/ebrahim-0"
          target="_blank"
          className="w-fit links flex gap-6 transition-all duration-400 hover:underline items-center"
          data-aos="zoom-out-up"
        >
          <AiFillGithub />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/ebrahim-abdelrazik2020/"
          target="_blank"
          className="w-fit links flex gap-6 transition-all duration-400 hover:underline items-center"
          data-aos="zoom-out-up"
        >
          <BsLinkedin />
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/ebrahimabdelrazik0"
          target="_blank"
          className="w-fit links flex gap-6 transition-all duration-400 hover:underline items-center"
          data-aos="zoom-out-up"
        >
          <BsFacebook />
          Facebook
        </a>
        <a
          href="mailto:ebrahimabdelrazik2002@gmail.com"
          className="w-fit links flex gap-6 transition-all duration-400 hover:underline items-center"
          data-aos="zoom-out-up"
        >
          <HiOutlineMail />
          Email
        </a>
        <a
          href="https://wa.me/201032868845"
          target="_blank"
          className="w-fit links flex gap-6 transition-all duration-400 hover:underline items-center"
          data-aos="zoom-out-up"
        >
          <BsWhatsapp />
          Whatsapp
        </a>
      </div>
    </div>
  );
}
