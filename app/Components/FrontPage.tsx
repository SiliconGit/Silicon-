"use client";
import React from "react";
import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import { FaGithub, FaDiscord, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import SiliconMain from "../assets/SiliconMain.png";
import Typewriter, { useTypewriter } from "react-simple-typewriter";
import "../styles/effects.css";
import "../styles/fonts.css";
import { motion } from "framer-motion";

const FrontPage: React.FC = () => {
  const [typewriter] = useTypewriter({
    words: [
      "Frontend Developer",
      "Backend Developer",
      "Python Developer",
      "C/C++ Developer",
      "UI/UX Designer",
    ],
    typeSpeed: 60,
    loop: true,
    deleteSpeed: 40,
  });

  return (
    <>
      <section className="text-center p-10 ">
        <h2 className="text-5xl josefin-slab py-2 text-teal-600 font-medium">
          Silicon
        </h2>
        <h3 className="lg:text-2xl md:text-2xl text-xl py-2 poppins-regular">
          I am a{" "}
          <span className="tracking-wider text-teal-800 poppins-medium">
            {typewriter}{" "}
          </span>
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 quicksand">
          {HERO_CONTENT}
        </p>
      </section>
      <section className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="https://github.com/SiliconGit">
          <FaGithub />
        </a>
        <a href="https://discord.gg/EcGUSxEq">
          <FaDiscord />
        </a>
        <a href="https://x.com/Dev_Silicon3">
          <FaXTwitter />
        </a>
      </section>
      <section className="relative flex justify-center items-center py-8">
        <div className="bg-gradient-to-b from-teal-500 rounded-full overflow-hidden w-60 h-60 lg:w-80 lg:h-80 imgShadow">
          <Image src={SiliconMain} alt="SiliconMainImg" />
        </div>
      </section>
    </>
  );
};

export default FrontPage;
