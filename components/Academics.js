import React from "react";

const Academics = () => {
  return (
    <section className="my-72" id="academics">
      <div className="text-[#45d71d] font-bold text-3xl text-center mb-24">
        Academics
      </div>
      <div class="container  mx-auto w-full h-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 border-gray-100 border h-full "
            style={{ left: "50%" }}
          ></div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline ">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div class="order-1 rounded-xl p-5 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-[#45d71d] text-xl">
                BS in Data Science and its Applications(IIT Madras)
              </h3>
              <div class="text-md leading-snug tracking-wide text-gray-200 text-opacity-100">
                Bachelors Degree From Indian Institute Of Technology Madras in
                Data Science and its Applications.
                <div className="my-8 text-xl font-semibold">
                  Sept.2020 - Sept.2024
                </div>
              </div>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div class="order-1 rounded-xl p-5 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-[#45d71d] text-xl">
                NIELIT "A" Level
              </h3>
              <div class="text-md leading-snug tracking-wide text-gray-200 text-opacity-100">
                Its a Advanced Diploma Programme in Information Technology from
                National Institute of Electronics & Information Technology
                (NIELIT) ,(erstwhile DOEACC Society), an Autonomous Scientific
                Society under the administrative control of Ministry of
                Electronics & Information Technology (MoE&IT), Government of
                India
                <div className="my-8 text-xl font-semibold">
                  Jan.2021 - May.2023
                </div>
              </div>
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div class="order-1 rounded-xl p-5 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-[#45d71d] text-xl">
                NIELIT "O" Level
              </h3>
              <div class="text-md leading-snug tracking-wide text-gray-200 text-opacity-100">
                Its a Advanced Diploma Programme in Information Technology from
                National Institute of Electronics & Information Technology
                (NIELIT) ,(erstwhile DOEACC Society), an Autonomous Scientific
                Society under the administrative control of Ministry of
                Electronics & Information Technology (MoE&IT), Government of
                India
                <div className="my-8 text-xl font-semibold">
                  Jan.2021 - july.2021
                </div>
              </div>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12"></div>
            <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div class="order-1 rounded-xl p-5 hover:scale-105 transform transition duration-300 ease-in-out bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl w-5/12 px-6 py-4">
              <h3 class="mb-3 font-bold text-[#45d71d] text-xl">
                Bsc in Geology
              </h3>
              <div class="text-md leading-snug tracking-wide text-gray-200 text-opacity-100">
                Currently Persuing it from D.S. College Aligarh , This Degree is
                Just an interest related .... To Be Frank The interest developed
                after knowing about Geology. And Also the rarest subjects in
                India as compared to other subjects which makes it different.
                <div className="my-8 text-xl font-semibold">
                  july.2020 - july.2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
