import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CreditCardIcon,
  CubeTransparentIcon,
  HashtagIcon,
} from "@heroicons/react/outline";
import React from "react";
import CountUp from "react-countup";
type Props = {};

const Blocks = (props: Props) => {
  return (
    <div className="my-16">
      <div className="flex flex-row items-center justify-center space-x-4">
        <p className="font-extrabold flex flex-row space-x-2 text-center text-white text-5xl  lg:text-6xl ">
          <p className="font-extrabold  text-white md:text-transparent  text-[2.5rem] md:text-5xl w-full lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            <CountUp delay={1} end={150} />+
          </p>
          Blocks
        </p>
        <img src="/images/cube.png" className="w-32" />
      </div>
      <div className="grid grid-cols-4 my-12 gap-8">
        <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <HashtagIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <ClockIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CubeTransparentIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>
        <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <HashtagIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <ClockIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CubeTransparentIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>
        <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <HashtagIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <ClockIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CubeTransparentIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>

        <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <HashtagIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <ClockIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CubeTransparentIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>

        <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <HashtagIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <ClockIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CubeTransparentIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>

        <div className=" text-center space-y-3 text-white font-bold p-6 flex flex-col justify-between  relative bg-white shadow-lg  bg-clip-padding bg-opacity-30 rounded-xl border border-gray-200 backdrop-filter: blur(20px)">
          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <HashtagIcon className="h-9 text-white" />
            <p className="text-white">Block number</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <ClockIcon className="h-9 text-white" />
            <p className="text-white">Time Stamp</p>
          </div>

          <div className="flex flex-row items-center cursor-pointer space-x-3">
            <CubeTransparentIcon className="h-9 text-white" />
            <p className="text-white">Hash</p>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-8xl mx-auto container py-10">
          <ul className="flex justify-center items-center">
            <li>
              <ChevronLeftIcon className="h-6 text-white" />
            </li>
            <li>
              <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
                1
              </span>
            </li>
            <li>
              <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
                2
              </span>
            </li>
            <li>
              <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white rounded transition duration-150 ease-in-out text-base leading-tight font-bold shadow px-3 py-2 ">
                ...
              </span>
            </li>
            <li>
              <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 ">
                6
              </span>
            </li>
            <li>
              <span className=" focus:bg-indigo-700 focus:text-white flex text-indigo-700 bg-white hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer transition shadow duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">
                7
              </span>
            </li>
            <li>
              <ChevronRightIcon className="h-7 text-white" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
