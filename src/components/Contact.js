import React from "react";
import profile from "../utils/profile.png";
import { MdAddCall, MdContactPage } from "react-icons/md";
import { GiLifeTap } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";
import { MdOutlinePlace } from "react-icons/md";
import { Tooltip } from "react-tooltip";
const Contact = () => {
  return (
    <div className=" bg-yellow-50 py-6 space-y-10">
      <div
        className="flex items-center justify-center font-extrabold font-sans text-3xl mb-6 uppercase gap-x-2"
        data-aos="fade-right"
      >
        <MdContactPage className="text-green-500 animate-pulse" />
        <span className="text-lime-500">CONTACT</span>
      </div>
    <div className="flex justify-center items-center h-full w-screen box-border">
      <div className="w-[50%]" data-aos="fade-right">
        <img
          className="mx-auto transform transition delay-100 duration-1000 hover:scale-[1.03] w-[330px] h-[380px] rounded-md"
          src={profile}
          alt="profile"
        />
      </div>
      <div className="w-[50%] transform transition delay-100 duration-1000 hover:scale-[1.03]">
        <div className="space-y-4" data-aos="fade-left">
          <p className="text-3xl font-bold text-blue-950">I'm Ravi Ranjan</p>
          <p className="text-xl font-bold text-orange-400">
            Full Stack Web Developer
          </p>

          <p className="font-sans font-medium text-cyan-700 w-[95%] text-justify">
            I am a Full-Stack Developer pursuing my BTech in Computer Science
            and Engineering from NIT Kurukshetra. I am passionate about
            improving my coding skills and developing applications and websites.
            I build WebApps and websites using the MERN stack and continuously
            work on improving my skills. I enjoy creating Full-Stack project.
          </p>
          <div className="font-mono leading-6 space-y-2 text-green-950">
            <p className="flex items-center gap-3">
              age{" "}
              <span>
                <GiLifeTap />
              </span>
              22
            </p>
            <p className="flex items-center gap-3">
              phone{" "}
              <span>
                <MdAddCall />
              </span>{" "}
              +91 7461972213
            </p>
            <p className="flex items-center gap-3">
              email{" "}
              <span>
                <MdOutgoingMail />
              </span>{" "}
              raviranjankumar130082002@gmail.com
            </p>
            <p className="flex items-center gap-3">
              place{" "}
              <span>
                <MdOutlinePlace />
              </span>{" "}
              Haryana, India
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
