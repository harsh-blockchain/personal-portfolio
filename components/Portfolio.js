import React from "react";
import lottery from "./assets/lottery.png";
import kanban from "./assets/kanban.png";
import marketPlace from "./assets/Screenshot (68).png";
import cryptex from "./assets/Screenshot (53).png";
import todo from "./assets/Screenshot (44).png";
import twitter from "./assets/Screenshot (41).png";
import medium from "./assets/Screenshot (80).png";
import airbnb from "./assets/Screenshot (78).png";
import Image from "next/image";

const Portfolio = () => {
  const data = [
    {
      id: "01",
      title: "NFT Market Place",
      img: marketPlace,
      keyword: ["Dapp", "Nextjs", "Tailwindcss", "Smart Contract"],
      liveUrl: "https://github.com/harsh-blockchain/NFT-Marketplace-Cryptoket",
    },

    {
      id: "02",
      title: "Cryptex : Ether Transfer App",
      img: cryptex,
      keyword: ["Dapp", "Website", "Smart Contract"],
      liveUrl: "https://github.com/harsh-blockchain/cryptex",
    },

    {
      id: "03",
      title: "Todo Dapp",
      img: todo,
      keyword: ["Defi", "Solidity", "Tailwindcss", "Solidity"],
      liveUrl: "https://github.com/harsh-blockchain/Todo-Dapp",
    },

    {
      id: "04",
      title: "Twitter Dapp",
      img: twitter,
      keyword: ["Dapp", "Truffle", "Nextjs", "Web3", "Solidity"],
      liveUrl: "https://github.com/harsh-blockchain/twitter-dapp",
    },

    {
      id: "05",
      title: "Lottery Dapp",
      img: lottery,
      keyword: ["Defi", "Solidity", "Tailwindcss", "Solidity"],
      liveUrl: "https://github.com/harsh-blockchain/Lottery-Dapp",
    },

    {
      id: "06",
      title: "Kanban V2  Dapp",
      img: kanban,
      keyword: ["Dapp", "Truffle", "Nextjs", "Web3", "Solidity"],
      liveUrl: "https://github.com/harsh-blockchain/Kanban-v2-Dapp",
    },

    {
      id: "07",
      title: "Airbnb Clone",
      img: airbnb,
      keyword: ["Web App", "Tailwindcss", "Nextjs"],
      liveUrl: "https://github.com/harsh-blockchain/Airbnb-2.0",
    },

    {
      id: "08",
      title: "Medium Clone",
      img: medium,
      keyword: ["Web App", "Tailwindcss", "Nextjs"],
      liveUrl: "https://github.com/harsh-blockchain/Medium-clone-frontend",
    },
  ];
  return (
    <section className="m-5" id="portfolio">
      <div className="text-[#01d293] text-3xl my-24 mx-5 font-bold">
        Some of my Projects...
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item) => (
          <div className={styles.card}>
            <div className={styles.container}>
              <div className={styles.title}>{item.title}</div>
              <a href={item.liveUrl} target="_blank">
                <div className={styles.button}>Git Repo</div>
              </a>
            </div>
            <div className={styles.img}>
              <Image src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

const styles = {
  card: `rounded-xl p-5 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-br from-slate-800 to-slate-900`,
  img: `w-full h-full rounded-xl`,
  title: `text-lg font-md text-[#01d293]`,
  container: `flex justify-between items-center py-5`,
  button: `flex hover:scale-105 transform transition duration-300 ease-in-out hover:bg-[#01d293] bg-[#0e1630] text-white px-4 py-2 rounded-2xl items-center space-x-2 cursor-pointer`,
};
