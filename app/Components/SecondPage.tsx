import React, { createContext } from "react";
import aboutImg from "../assets/about.jpg";
import "../styles/effects.css";
import "../styles/fonts.css";
import Image from "next/image";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const SecondPage = () => {
  return (
    <section className="py-4 ">
      <h2 className="my-20 monsterrat text-center text-4xl tracking-wider text-teal-600">
        About Myself
      </h2>
      <div className="flex justify-center items-center flex-wrap">
        <div
          className="flex items-center justify-center  mx-6 my-8 lg:m-0"
        >
          <Image
            src={aboutImg}
            alt="AboutImg"
            width={300}
            height={300}
            className="rounded-full shadow-lg mx-10 imgShadow w-60 h-60 lg:w-80 lg:h-80 "
          />
        </div>
        <div className="flex justify-center items-center ">
          <p className=" text-center  text-gray-800 tracking-normal  rounded-2xl leading-7  lg:p-8  p-2 my-10 lg:mx-44 quicksand">
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondPage;
