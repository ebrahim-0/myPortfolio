export default function About() {
  return (
    <div
      id="about"
      className="container mx-auto md:w-5/6 text-gray-200  text-xl md:text-4xl projects py-24 mt-7 px-10"
    >
      <h2 className="font-bold text-4xl md:text-6xl text-center title">
        About Me
      </h2>
      <div
        className="text-3xl p-7 my-12 leading-loose "
        data-aos="zoom-in-right"
      >
        <p className="text-start md:text-center">
          I'm a Front-End Developer building responsive websites project.
          Proficient in HTML5, CSS3, Bootstrap, Tailwind css, SASS, JavaScript,
          React.js, Redux Toolkit, Next.js, Git and GitHub
        </p>
      </div>

      <h2 className="font-bold text-4xl md:text-6xl text-center title">
        Education
      </h2>

      <div className="text-3xl p-7 mt-12 leading-loose" data-aos="zoom-in-up">
        <p className="text-start md:text-center">
          Faculty Of Engineering - Computer and Communication Engineering
          department – CCE Mansoura University
        </p>
      </div>
    </div>
  );
}
