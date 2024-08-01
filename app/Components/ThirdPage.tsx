import React from "react";
import { SERVICES_TEXT } from "../constants";
import "../styles/fonts.css";

const ThirdPage = () => {
  return (
    <section>
      <div className="text-center py-10">
        <h3 className="text-3xl py-1 monsterrat text-teal-600 mx-auto">
          Services 
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 quicksand">{SERVICES_TEXT}</p>
      </div>
      <div className="lg:flex justify-center items-center gap-4 quicksand" >
        <div className="text-center shadow-xl p-10 rounded-3xl my-10  mx-8">
          <h3 className="text-2xl my-2 ">Frontend Developer</h3>
          <p className="text-sm">
            I can do frontend UI of a Website and also design it!
          </p>
          <h4 className="text-xl font-medium pt-8 pb-2  text-teal-600">
            Tools
          </h4>
          <div>
          <p className="text-gray-800 py-1">HTML CSS/SCSS JS/TS</p>
          <p className="text-gray-800 py-1">React.js</p>
          <p className="text-gray-800 py-1">Next.js</p>
          <p className="text-gray-800 py-1">Figma</p>
          </div>
        </div>
        <div className="text-center shadow-xl p-10 rounded-3xl my-10  mx-8">
          <h3 className="text-2xl my-2 ">Backend Developer</h3>
          <p className="text-sm">
            I am quite ok at backend processing nowadays!
          </p>
          <h4 className="text-xl font-medium pt-8 pb-2  text-teal-600">
            Tools
          </h4>
          <div >
          <p className="text-gray-800 py-1">Express.js</p>
          <p className="text-gray-800 py-1">Node.js</p>
          <p className="text-gray-800 py-1">Django</p>
          <p className="text-gray-800 py-1">Php</p>
          </div>
        </div>
        <div className="text-center shadow-xl p-10 rounded-3xl my-10  mx-8  ">
          <h3 className="text-2xl my-2 ">UI/UX Designer</h3>
          <p className="text-sm">
            I love to make UI Designs for my projects
          </p>
          <h4 className="text-xl font-medium pt-8 pb-2  text-teal-600">
            {" "}
            Tools
          </h4>
          <div >
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Brackets</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
