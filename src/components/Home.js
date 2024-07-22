import React, { useState } from "react";
import profile from "../utils/profile.png";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaRegArrowAltCircleDown,
  FaYoutube,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Typewriter from "typewriter-effect";
import Particle from "./Particle";
import Lottie from "lottie-react";
import Animation from "../static/Animation.json";
import homeanimation from "../static/homeanimation.json";

const Home = () => {
  const [showParticles, setShowParticles] = useState(true);

  return (
    <div>
      <div className="relative flex justify-between w-full p-5">
        {showParticles && (
          <div className="absolute top-0 left-0 w-full h-full">
            <Particle />
          </div>
        )}
        <div
          className="z-10 w-[50%] items-center justify-center p-20 mx-10 space-y-8"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-sans font-extrabold text-slate-700 ">
            Hi There,
            <br className="text-4xl font-sans font-extrabold text-red-600" />{" "}
            I'm Ravi Ranjan
          </h2>
          <p className="flex text-3xl font-sans font-semibold text-orange-600 my-2">
            I am
            <span className="mx-2 text-green-500">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "UI/UX Designer",
                    "Full Stack Developer",
                    "",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  pauseFor: 1000,
                }}
              />
            </span>
          </p>
          <Link
            className="flex justify-center items-center w-32 p-3 space-x-3 rounded-lg text-white shadow-blue-800 bg-blue-800 transition-all hover:bg-blue-500 hover:-translate-y-0.5 duration-300"
            to="/contact"
          >
            <span>About Me</span>
            <span>
              <FaRegArrowAltCircleDown />
            </span>
          </Link>
          <div>
            <ul className="flex items-center space-x-5 text-2xl text-cyan-500">
              <li className="bg-black rounded-[50%] p-2 transition-all hover:scale-110 duration-200">
                <Link to="https://www.linkedin.com/in/ravi-ranjan-108350251/">
                  <FaLinkedin />
                </Link>
              </li>
              <li className="bg-black rounded-[50%] p-2 transition-all hover:scale-110 duration-200">
                <Link
                  to="github"
                  aria-label="GitHub"
                  href="https://github.com/RaviRanjan20002"
                >
                  <FaGithub />
                </Link>
              </li>
              <li className="bg-black rounded-[50%] p-2 transition-all hover:scale-110 duration-200">
                <Link to="https://www.linkedin.com/in/ravi-ranjan-108350251/">
                  <FaYoutube />
                </Link>
              </li>
              <li className="bg-black rounded-[50%] p-2 transition-all hover:scale-110 duration-200">
                <Link to="https://www.linkedin.com/in/ravi-ranjan-108350251/">
                  <CgMail />
                </Link>
              </li>
              <li className="bg-black rounded-[50%] p-2 transition-all hover:scale-110 duration-200">
                <Link to="https://www.linkedin.com/in/ravi-ranjan-108350251/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="z-10 w-[50%] flex justify-center items-center transition-all">
          <Lottie animationData={homeanimation} loop={true} />
        </div>
      </div>
      <div
        className="z-10"
        onMouseEnter={() => setShowParticles(false)}
        onMouseLeave={() => setShowParticles(true)}
      >
        <Skills />
      </div>
      <div
        className="z-10"
        onMouseEnter={() => setShowParticles(false)}
        onMouseLeave={() => setShowParticles(true)}
      >
        <Education />
      </div>
      <div
        className="z-10"
        onMouseEnter={() => setShowParticles(false)}
        onMouseLeave={() => setShowParticles(true)}
      >
        <Work />
      </div>
      <div
        className="z-10"
        onMouseEnter={() => setShowParticles(false)}
        onMouseLeave={() => setShowParticles(true)}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;

