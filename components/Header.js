import React from "react";
import { FcContacts } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineSettingsSystemDaydream } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  const start = "<";
  const end = " />";
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.coloured}>{start}H</div>arsh&nbsp;
        <div className={styles.coloured}>B</div>ardhan&nbsp;
        <div className={styles.coloured}>{end}</div>
      </div>

      <div className={styles.right}>
        <Link href="/">
          <div className={styles.button}>
            <HiHome />
            <div>Home</div>
          </div>
        </Link>
        <Link href="#about">
          <div className={styles.button}>
            <BsFillPersonFill />
            <div>About</div>
          </div>
        </Link>
        <Link href="#portfolio">
          <div className={styles.button}>
            <AiOutlineFundProjectionScreen />
            <div>Portfolio</div>
          </div>
        </Link>
        <Link href="#academics">
          <div className={styles.button}>
            <MdOutlineSettingsSystemDaydream />
            <div>Academics</div>
          </div>
        </Link>
        <Link href="#contact">
          <div className={styles.button}>
            <FcContacts />
            <div>Contact</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

const styles = {
  container: `flex text-4xl font-semibold font-Sans-serif cursor-pointer`,
  wrapper: `flex items-center justify-between py-4`,
  coloured: `text-[#01d293]`,
  right: `flex space-x-4 text-lg items-center font-semibold font-Sans-serif hidden md:flex`,
  button: `flex hover:scale-105 transform transition duration-300 ease-in-out hover:bg-[#01d293] bg-[#0e1630] text-white px-4 py-2 rounded-xl items-center space-x-2 cursor-pointer`,
};
