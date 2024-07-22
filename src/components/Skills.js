import c from "../utils/skills/C.png";
import Cplus from "../utils/skills/C++.png";
import python from "../utils/skills/python.png";
import java from "../utils/skills/java.png";
import html from "../utils/skills/html.png";
import css from "../utils/skills/css.png";
import javascript from "../utils/skills/javascript.png";
import mongodb from "../utils/skills/mongodb.png";
import express from "../utils/skills/express.png";
import react from "../utils/skills/react.png";
import nodejs from "../utils/skills/nodejs.png";
import github from "../utils/skills/github.png";
import firebase from "../utils/skills/firebase.png";
import figma from "../utils/skills/figma.png";
import tailwind from "../utils/skills/tailwind.png";
import bootstrap from "../utils/skills/bootstrap.png";
import { GiSkills } from "react-icons/gi";
const Skills = () =>{
    const skills = [
        { id: 1, title: c, name: "c" },
        { id: 2, title: Cplus, name: "C++" },
        { id: 3, title: python, name: "python" },
        { id: 4, title: java, name: "java" },
        { id: 5, title: html, name: "html" },
        { id: 6, title: css, name: "css" },
        { id: 7, title: javascript, name: "javascript" },
        { id: 8, title: mongodb, name: "mongodb" },
        { id: 9, title: express, name: "express" },
        { id: 10, title: react, name: "react" },
        { id: 11, title: nodejs, name: "nodejs" },
        { id: 12, title: github, name: "github" },
        { id: 13, title: firebase, name: "firebase" },
        { id: 14, title: figma, name: "figma" },
        { id: 15, title: tailwind, name: "tailwind" },
        { id: 16, title: bootstrap, name: "bootstrap" } 
    ];
    
    return(
     <div className=" bg-violet-400 py-8">
      <div className="flex items-center justify-center font-extrabold font-sans text-4xl mb-6 u uppercase gap-x-2" data-aos="fade-right">
      <GiSkills className="text-red-800 animate-pulse"/>
      <span className=" text-green-800">Skills</span>
      </div>
      <div className="grid grid-cols-4 w-[70%] h-[70%] bg-violet-500 gap-5 p-8 mx-auto overflow-hidden box-border" data-aos="fade-up">
        {
            skills.map((skill) =>
            <div className="bg-violet-900 rounded-lg h-40 transition-all duration-500 delay-200 ease-in-out hover:bg-zinc-800" data-aos="fade-up" key={skill.id}>
            <div className="h-40 flex flex-col justify-center items-center transform transition duration-1000 delay-100 hover:scale-[1.08] gap-2">
            <img className="h-24 w-24" src={skill.title} alt="skill.title"/>
            <p className="text-white font-mono font-bold uppercase" >{skill.name}</p>
            </div>
            </div>
            )
        }
      </div>
      </div>
    );
}
export default Skills;

