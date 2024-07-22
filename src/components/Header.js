import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap } from "react-icons/fa";
const Header = () => {

 useEffect(() => {
  AOS.init({
    offset:0,
    duration:800,
    easing: 'ease-in-sine',
    delay:300,
  });
}, [])

  return (
    <div className=" w-screen sticky top-0 z-20 p-5 flex justify-between items-center bg-gray-200 hover:bg-gray-300 rounded-md">
      <div className=" flex items-center">
        <div className="flex items-center text-2xl px-2 font-bold hover:font-extrabold" data-aos="fade-right">
        <FaGraduationCap className=" size-10 animate-pulse" />
        <span className="text-blue-600">&lt;</span>
        <span className="text-blue-600">Ravi Ranjan</span>
        <span className="text-blue-600"> /&gt;</span>
        </div>
       
      </div>

      <div>
        <nav>
          <ul className="flex space-x-8 px-5 font-serif text-lg font-thin text-black" data-aos="fade-left">
            <li className="transition-transform delay-150 hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:scale-100 hover: px-1 hover:rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="transition-transform delay-150 hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:scale-100 hover: px-1 hover:rounded-md">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="transition-transform delay-150 hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:scale-100 hover: px-1 hover:rounded-md">
              <Link to="/education">Education</Link>
            </li>
            <li className="transition-transform delay-150 hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:scale-100 hover: px-1 hover:rounded-md">
              <Link to="/work">Work</Link>
            </li>
            <li className="transition-transform delay-150 hover:bg-gray-500 hover:-translate-y-1 duration-500 hover:scale-100 hover: px-1 hover:rounded-md">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
