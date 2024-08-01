import React from "react";
import '../styles/fonts.css'
const Footer = () => {
  return (
    <section >
      <div className="flex flex-col gap-4 justify-center items-center text-center p-10 mt-20 ">
        <p className="text-gray-600 text-xl">
          {" "}
          &#169; <span className="ubuntu-sans-mono">Copyright 2023 <span className="text-teal-600">Silicon3</span>. All rights reserved.</span>
        </p>
        <div className="flex gap-4">
          <p className="text-gray-600 ubuntu-sans-mono">Created by <span className="text-teal-600">Silicon</span> aka <span className="text-teal-800">SourishKr</span></p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
