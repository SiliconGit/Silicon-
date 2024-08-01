import { RiReactjsLine, RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiJava , DiRubyRough  } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandTypescript, TbBrandPython } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { DiPhp } from "react-icons/di";
import { BiLogoDjango } from "react-icons/bi";
import '../styles/fonts.css'

const FourthPage = () => {
  return (
    <div className=" pb-24">
    <div className="my-20">
    <h1 className=" m-2 text-center text-3xl monsterrat text-cyan-600">
      Skills 
    </h1>
    <p className=" m-2 quicksand text-center py-2">This are some skills that i am currently working on!</p></div>
    <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20">
      <div className="rounded-2xl shadow-lg  p-4">
        <TbBrandTypescript className="text-7xl text-blue-600" />
      </div>
      <div className="rounded-2xl shadow-lg  p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </div>
      <div className="rounded-2xl  shadow-lg p-4">
        <RiNextjsFill className="text-7xl" />
      </div>
      <div className="rounded-2xl  shadow-lg p-4">
        <SiMongodb className="text-7xl text-green-500" />
      </div>
      <div className="rounded-2xl shadow-lg  p-4">
        <DiJava className="text-7xl text-red-700" />
      </div>
      <div className="rounded-2xl  shadow-lg p-4">
        <FaNodeJs className="text-7xl text-green-500" />
      </div>
      <div className="rounded-2xl shadow-lg  p-4">
        <DiRubyRough className="text-7xl text-red-700" />
      </div>
      <div className="rounded-2xl  shadow-lg p-4">
        <TbBrandPython className="text-7xl " />
      </div>
      <div className="rounded-2xl shadow-lg  p-4">
        <BiLogoDjango  className="text-7xl text-green-700 " />
      </div>
      <div className="rounded-2xl shadow-lg  p-4">
        <TbBrandCpp className="text-7xl text-blue-600" />
      </div>
      <div className="rounded-2xl  shadow-lg p-4">
        <TbSql className="text-7xl text-yellow-600" />
      </div>
      <div className="rounded-2xl shadow-lg  p-4">
        <DiPhp className="text-7xl text-purple-600" />
      </div>
    </div>
  </div>
  )
}

export default FourthPage
