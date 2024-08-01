import React from "react";
import { CONTACT } from "../constants";
import "../styles/fonts.css";
import "../styles/effects.css";


const Contact = () => {
  return (
    <section className="my-20">
      <div className="text-center">
        <h1 className="text-3xl py-1 monsterrat text-teal-600">Get in touch</h1>
        <p className="text-md py-2 leading-8 text-gray-800 quicksand">
          This section is about my personal information
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 py-14 px-8 bg-teal-800 text-white rounded-2xl imgShadow ">
        <p className="text-xl font-semibold ubuntu-sans-mono">
          {CONTACT.address}
        </p>
        <p className="text-xl font-semibold ubuntu-sans-mono">
          {CONTACT.email}
        </p>
        <a
          href="mailto:Sourishkumar8@gmail.com"
          className="text-xl quicksand px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full shadow-lg 
       transition-transform transform  border-2 border-transparent text-transparent bg-clip-text"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
