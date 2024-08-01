import Image from "next/image";
import Navbar from "./Components/Navbar";
import FrontPage from "./Components/FrontPage";
import SecondPage  from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FifthPage from "./Components/FifthPage";
import FourthPage from "./Components/FourthPage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { motion } from 'framer-motion';

export default function Home ()
{


  return (
  <main >
  <div className="px-10 md:px-20 lg:px-40 dark:bg-gray-900" >
    <Navbar />
    <FrontPage />
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage />
<Contact />
    <Footer />

  </div>
  </main>

  );
}
