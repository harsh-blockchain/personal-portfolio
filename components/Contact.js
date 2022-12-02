import React from "react";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";

const Contact = () => {
  return (
    <section id="contact" className={styles.wrapper}>
      <div className={styles.container1}>
        <div className={styles.title}>Want to hire me/Collaborate ?</div>

        <div className="mb-8 text-lg text-slate-400 font-medium">
          Thank you for your time in reviewing my work and feel free to revert
          back if you want to Collaborate or believe I can bring value to your
          organization/team.
        </div>

        <div>
          <div className="flex items-center text-slate-400">
            <GoLocation className="bg-[#44dbae] m-4 text-3xl p-[6px] rounded-md text-[#215f4c]" />
            <div className="text-xl">India</div>
          </div>
          <div className="flex items-center text-slate-400">
            <FiMail className="bg-[#44dbae] m-4 text-3xl p-[6px] rounded-md text-[#215f4c]" />
            <div className="text-xl">harshbardhanweb3@gmail.com</div>
          </div>

          <div className="flex space-x-6 items-center my-8 mx-4">
            <a href="https://twitter.com/HarshBa70574245" target="_blank">
              <BsTwitter className="text-2xl text-slate-400" />
            </a>
            <a href="https://github.com/harsh-blockchain" target="_blank">
              <AiFillGithub className="text-2xl text-slate-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-bardhan-613b27258/"
              target="_blank"
            >
              <ImLinkedin2 className="text-2xl text-slate-400" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <form
          className={styles.container2}
          action="https://formspree.io/f/xjvzqlde"
          method="POST"
        >
          <input
            className={styles.inputs}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={styles.inputs}
            type="email"
            name="email"
            placeholder="Your Email"
          />

          <textarea
            className={styles.inputs}
            type="text"
            name="message"
            placeholder="message"
          />

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

const styles = {
  container1: `flex flex-[0.6] flex-col`,
  container2: `space-y-8 flex flex-[0.4] flex-col items-center justify-center mt-10`,
  wrapper: `my-56 mx-4 flex flex-col md:flex-row justify-between`,
  inputs: `bg-[#808dad70] text-white w-[32rem] m-0 border-none text-xl px-4 py-3 border-none rounded-xl`,
  title: `text-4xl font-semibold font-Sans-serif text-[#01d293] mb-16`,
  button: `flex hover:scale-110 transform transition duration-300 ease-in-out hover:text-slate-800 bg-[#01d293] text-white px-4 py-2 rounded-xl items-center space-x-2 cursor-pointer items-center justify-center w-1/4 mx-auto text-xl font-semibold font-Sans-serif`,
};
