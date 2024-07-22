import React, { useState } from "react";
import port from "../utils/projects/Port.png";
import quizz from "../utils/projects/quizz.png";
import snakeg from "../utils/projects/snakeg.png";
import visualiser from "../utils/projects/visualiser.png";
import { VscGithubProject } from "react-icons/vsc";
import { BiCode, BiCut } from "react-icons/bi";
import { LuLink } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
const projects = [
  {
    id: 1,
    imgname: port,
    title: "Portfolio Website",
    description:
      "Personal portfolio website. Don't need much info about it, just scroll down. You're here only!",
  },
  {
    id: 2,
    imgname: snakeg,
    title: "Snake game",
    description:
      "Developed an engaging Snake game in C++ featuring a fun and enjoyable algorithm.",
  },
  {
    id: 3,
    imgname: quizz,
    title: "AI-Powered Custom Quiz generator",
    description:
      "A web-based custom quiz generator and utilize AI capabilities via the Gemmini API for automated quiz creation.",
  },
  {
    id: 4,
    imgname: visualiser,
    title: "Sorting Visualizer",
    description:
      "It's an interactive web application that visually demonstrates how different sorting algorithms work.",
  },
];

const Work = () => {
  const [showContent, setShowContent] = useState(null); // State to manage which project content to show

  const toggleContent = (projectId) => {
    if (showContent === projectId) {
      setShowContent(null); // Hide content if already shown
    } else {
      setShowContent(projectId);
    }
  };

  return (
    <div className="bg-zinc-700 py-8">
      <div
        className="flex items-center justify-center font-extrabold font-sans text-4xl mb-6 uppercase gap-x-2"
        data-aos="fade-right"
      >
        <VscGithubProject className="text-green-500 animate-pulse" />
        <span className="text-pink-500">PROJECTS</span>
      </div>
      <div
        className="grid grid-cols-2 w-[90%] h-[90%] bg-zinc-800 gap-5 p-8 mx-auto"
        data-aos="fade-up"
      >
        {projects.map((project) => (
          <div
            className="relative bg-zinc-900 flex flex-col justify-center items-center rounded-lg overflow-hidden box-border gap-2 transition-all duration-700 hover:bg-violet-500"
            key={project.id}
            data-aos="flip-up"
          >
            <img
              className="transform transition duration-1000 delay-100 hover:scale-105 h-[80%] w-[92%]"
              src={project.imgname}
              alt={project.title}
            />
            <p className="flex items-center transform transition duration-1000 delay-100 hover:scale-[1.06] text-white font-mono font-bold uppercase gap-2">
              {project.title}
              <BsThreeDotsVertical
                className="text-blue-400 hover:text-pink-900"
                onClick={() => toggleContent(project.id)}
              />
            </p>
            {showContent === project.id && (
              <div className="text-4xl flex items-center justify-center absolute bottom-0 left-0 h-1/2 w-full bg-red-700 rounded-lg text-white transition-all duration-1000 ease-out gap-10">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Get Code Here !"
                  data-tooltip-float="false"
                  data-tooltip-place="top"
                  data-tooltip-delay-show="500"
                  data-tooltip-variant="dark"
                >
                  <button>
                    <BiCode />
                  </button>
                </a>
                <Tooltip id="my-tooltip" />
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="See Website!"
                  data-tooltip-float="true"
                  data-tooltip-delay-show="500"
                >
                  <button>
                    <LuLink />
                  </button>
                </a>
                <Tooltip id="my-tooltip" />
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Close it!"
                  data-tooltip-place="top"
                  data-tooltip-float="false"
                  data-tooltip-delay-show="500"
                >
                  <button onClick={() => toggleContent(project.id)}>
                    <BiCut />
                  </button>
                </a>
                <Tooltip id="my-tooltip" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
