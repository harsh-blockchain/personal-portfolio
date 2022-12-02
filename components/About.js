import React from "react";
import { motion } from "framer-motion";
import Avtaar from "./Untitled design.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <motion.div
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:mb-8">
          About
        </div>

        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] relative mt-10"
          src={Avtaar}
          objectFit="contain"
          alt="Image"
        />
        <div className="space-y-10 px-0 md:px-10 text-center">
          <div className="text-4xl font-semibold flex text-slate-500 text-center items-center w-full ml-24">
            <div>Here is a &nbsp;</div>
            <div className="underline decoration-[#f7ab0a]/50">little</div>
            &nbsp; background:
          </div>
          <div className="text-lg text-center">
            Well I am 20 year old student from India,currently perusing
            bachelor's Degree from IIT Madras in Data Science and its
            Application, Started exploring the blockchain and full stack
            development space in mid 2021. I believe that I can write solidity
            smart contracts, comfortable to work with both truffle and hardhat
            to compile and deploying the smart contracts on desired network. I
            can make stunning frontend with either reactjs or nextjs with normal
            CSS classes or tailwind utility classes and integrate the frontend
            with smart contract using ether.js.
          </div>
          <a
            href="https://drive.google.com/file/d/1McP3YiPDNwQxtQyO4zDpom82NWvnFdR7/view?usp=sharing"
            target="_blank"
          >
            <div className="flex hover:scale-105 transform transition duration-300 ease-in-out hover:bg-[#01d293] bg-[#17674f] text-white px-4 py-2 rounded-xl items-center space-x-2 cursor-pointer text-xl font-semibold w-2/4 text-center justify-center mt-16 ml-40">
              Download Resume
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
