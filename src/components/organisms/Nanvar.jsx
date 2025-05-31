"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { Linkedin } from "@/components/atoms/Linkedin";
import { Github } from "@/components/atoms/Github";
import { DownloadCv } from "@/components/atoms/DownloadCv";

export const Nanvar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      layout
      className="fixed z-9999 top-0 w-full flex items-center justify-between"
    >
      <nav className="bg-[#101020]/20  backdrop-blur-2xl max-w-[1280px] w-full px-6 md:py-4 py-2 flex items-center justify-between text-white m-auto font-bold">
        <div className="md:p-2 p-1 neon-lavanda rounded-full">
          <img
            src="./gravatar.svg"
            alt="Logo Portafolio"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <p className="mr-auto pl-6 md:text-3xl text-2xl neon-text">
          Portafolio
        </p>
        <ul className="hidden md:flex space-x-8 lg:text-[1.2rem]  text-[1rem] font-medium align-center">
          <li>
            <a href="#inicio" className="hover:text-[#00CFFF]  transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#sobre-mi" className="hover:text-[#00CFFF] transition">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-[#00CFFF] transition">
              Proyectos
            </a>
          </li>
        </ul>
        <div
          className="flex md:hidden flex-col gap-[6px] container__menu hover:cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <div className={`item ${menu ? "active" : ""}`}></div>
          <div className={`item ${menu ? "active" : ""}`}></div>
          <div className={`item ${menu ? "active" : ""}`}></div>
        </div>
        <motion.section
          className="flex flex-col md:hidden  bg-gradient-to-br from-[#000000] via-[#16162c] to-[#000000] bg-400 animate-gradient-x 
          absolute  z-9999 top-0 left-0 w-[250px] h-screen border-r border-[#8fe3ff8e]"
          animate={menu ? { x: 0 } : { x: -400 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <p className="w-full h-16 pl-6 flex justify-start items-center text-2xl">
            Portafolio
          </p>
          <ul className="flex flex-col text-[1.1rem] font-medium items-center mt-6">
            <li className="w-full px-6 py-3 hover-celeste ">
              <a
                href="#inicio"
                className="hover:text-[#00CFFF]  hover:cursor-pointer transition"
              >
                Inicio
              </a>
            </li>
            <li className="w-full px-6 py-3 hover-celeste ">
              <a
                href="#sobre-mi"
                className="hover:text-[#00CFFF] hover:cursor-pointer transition"
              >
                Sobre mí
              </a>
            </li>
            <li className="w-full px-6 py-3 hover-celeste ">
              <a
                href="#proyectos"
                className="hover:text-[#00CFFF]  hover:cursor-pointer transition"
              >
                Proyectos
              </a>
            </li>
          </ul>
          <div className="flex flex-row justify-start items-center gap-6 py-3 px-6">
            <Linkedin />
            <Github />
          </div>
          <div className="self-center mt-auto mb-4">
            <DownloadCv />
          </div>
        </motion.section>
        <div
          className={`${
            menu ? "flex" : "hidden"
          } absolute z-10 top-0 opacity-0  w-full h-[100vh]`}
          onClick={() => setMenu(!menu)}
        ></div>
      </nav>
    </motion.header>
  );
};
