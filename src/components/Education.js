import React from 'react';
import college from "../utils/college.jpeg";
import school from "../utils/school.jpeg";
import { FaBookReader } from "react-icons/fa";
import { FaStudiovinari } from "react-icons/fa";

const Education = () => {
  return (
    <div className="flex flex-col items-center space-y-4 py-4 pb-8 bg-orange-50">
      <h1 className="text-4xl flex items-center gap-2 font-extrabold mt-5" data-aos="fade-up">
        <FaBookReader className="text-yellow-500"/>
        <span className="text-black">My</span><span className="text-violet-700">Education</span>
      </h1>
      <p className=" flex items-center gap-1 text-lg font-medium text-cyan-700" data-aos="fade-up"> <FaStudiovinari />Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
      <div className="flex items-center bg-gray-500 p-15 w-[70%] rounded-lg transition-all duration-200 hover:scale-[1.03]" data-aos="flip-up">
      <img className="h-40 w-80 rounded-l-lg" src={college} alt="collegeimg"/>
      <div className="space-y-3 px-4" data-aos="zoom-in">
        <p className="text-2xl font-extrabold text-blue-950">BTech in Computer Science and Engineering</p>
        <p className="text-lg font-medium">NATIONAL INSTITUTE OF TECHNOLOGY | Haryana</p>
        <p className="text-xl font-bold text-amber-800">2021-2025 |pursuing</p>
      </div>
      </div>
      <div className="flex items-center bg-gray-500 p-15 w-[70%] rounded-lg transition-all duration-200 hover:scale-[1.03]" data-aos="flip-up">
      <img className="h-40 w-80 rounded-l-lg" src={school} alt="schoolimg"/>
      <div className="space-y-3 px-4 " data-aos="zoom-in">
      <p className="text-2xl font-extrabold text-blue-950">Intermediate Examination </p>
        <p className="text-lg font-medium">S.D.S college Kaler,Arwal| BSEB</p>
      <p className="text-xl font-bold text-red-950">Completed</p>
      </div>
      </div>
    </div>
  );
}

export default Education;
