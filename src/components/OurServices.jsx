import React from "react";
import { IoIosBed } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineFastfood } from "react-icons/md";
import { FaBusSimple } from "react-icons/fa6";
import { PiMountainsDuotone } from "react-icons/pi";

import Vacation from "../assets/sun-bed_17386846.png";
import train from "../assets/subway_1185568.png";
import charter from "../assets/train_5497716.png";
import gallery from "../assets/gallery.png";
import plane from "../assets/airplane_1350120.png";

const OurServices = () => {
  return (
    <div className="px-[5%] py-[64px]">
      <h2 className="text-4xl font-semibold text-blue-800 text-center">
        Our Services
      </h2>
      <div className="flex items-center justify-center py-8 ">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <img src={plane} alt="plane" width={48} height={48} />
            <p>Flights</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <IoIosBed size={48} />
            <p>Hotels</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <AiOutlineStock size={48} />
            <p>Rail Drishti</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <MdOutlineFastfood size={48} />
            <p>E-catering</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <FaBusSimple size={48} />
            <p>Bus</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <img src={Vacation} alt="vacation" width={48} height={48} />
            <p>Vacation</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <img src={train} alt="train" width={48} height={48} />
            <p>Tourist Train</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 transition-all">
            <PiMountainsDuotone size={48} />
            <p>Hill Railways</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <img src={charter} alt="train" width={48} height={48} />
            <p>Charter Train</p>
          </div>
          <div className="border flex flex-col justify-center items-center p-4 rounded-xl text-xl font-semibold bg-slate-400/20 cursor-pointer gap-4 shadow-md hover:scale-105 trasition-all">
            <img src={gallery} alt="gallery" width={48} height={48} />
            <p>Gallery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
