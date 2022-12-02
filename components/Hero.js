import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Avtaar from "./Untitled design.png";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Solidity Developer", "Full Stack Developer", "Learner"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{ duration: 2.5 }}
      >
        <div className="absolute border border-[#ad4545] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
        <div className="absolute border border-[#333] rounded-full h-[300px] w-[300px] mt-52" />
        <div className="absolute border border-[#333] rounded-full h-[500px] w-[500px] mt-52" />
        <div className="absolute border border-[#f7ab0a] rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
        <div className="absolute border border-[#333] rounded-full h-[800px] w-[800px] mt-52" />
      </motion.div>
      <Image
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        src={Avtaar}
        width={128}
        height={128}
        alt="Avatar"
      />
      <div className="z-20">
        <h2 className="text-lg uppercase text-gray-500 pb-2 tracking-[15px]">
          HARSH BARDHAN
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="mt-8 space-x-12">
          <Link href="#about">
            <button className={styles.button}>About</button>
          </Link>
          <Link href="#experience">
            <button className={styles.button}>Education</button>
          </Link>
          <Link href="#skills">
            <button className={styles.button}>Skills</button>
          </Link>
          <Link href="#portfolio">
            <button className={styles.button}>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const styles = {
  button: `hover:scale-105 transform transition duration-300 ease-in-out hover:bg-[#01d293] bg-transparent text-md font-medium text-white px-4 py-2 rounded-xl items-center space-x-2 cursor-pointer`,
};
