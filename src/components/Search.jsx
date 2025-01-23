import React, { useState } from "react";
import trainSrc from "../assets/train_src.svg";
import trainDest from "../assets/train_dest.svg";
import ticket from "../assets/invoice.png";
import cal from "../assets/cal.svg";

const Search = () => {
  const [isSearchTrain, setIsSearchTrain] = useState(true);

  const handleChange = (e) => {
    setIsSearchTrain(e.target.value === "book");
  };

  return (
    <div className="px-[5%] bg-blue-800 text-white py-8 pt-24 ">
      <div className="flex gap-4 justify-center text-lg">
        <div className="flex gap-2 items-center bg-white text-blue-700 font-semibold px-6 py-2 rounded-full">
          <input
            type="radio"
            id="a"
            name="radio"
            className="text-black"
            value="book"
            checked={isSearchTrain}
            onChange={handleChange}
          />
          <label htmlFor="a">Search Train</label>
        </div>
        <div className="flex gap-2 items-center bg-white text-blue-700 font-semibold px-6 py-2 rounded-full">
          <input
            type="radio"
            id="b"
            name="radio"
            className="text-black"
            value="pnr"
            checked={!isSearchTrain}
            onChange={handleChange}
          />
          <label htmlFor="b">Check PNR</label>
        </div>
      </div>

      {isSearchTrain ? (
        <>
          <div className="hidden md:block backdrop-blur-md w-full bg-white/40  rounded-xl mt-8">
            <div className="flex gap-[2px]">
              <div className="flex-1 rounded-l-xl flex bg-white">
                <img
                  src={trainSrc}
                  alt="src"
                  height={32}
                  width={32}
                  className="mx-4"
                />
                <input
                  type="text"
                  className="w-full h-full py-6 rounded-l-xl text-black px-4 outline-none text-xl"
                  placeholder="From"
                />
              </div>
              <div className="flex-1 flex bg-white ">
                <img
                  src={trainDest}
                  alt="dest"
                  height={32}
                  width={32}
                  className="mx-4"
                />
                <input
                  type="text"
                  className="w-full h-full py-6 rounded-l-xl text-black px-4 outline-none"
                  placeholder="To"
                />
              </div>
              <div className="flex-1 flex rounded-r-xl bg-white ">
                <img
                  src={cal}
                  alt="dest"
                  height={24}
                  width={24}
                  className="mx-4"
                />
                <input
                  type="text"
                  className="w-full h-full py-6 rounded-r-xl text-black px-4 outline-none"
                  placeholder="Journey Date"
                />
              </div>
              
            </div>
          </div>
          {/* Resp */}
          <div className="flex flex-col gap-4 md:hidden mt-4">
            <div className="rounded-xl flex bg-white">
              <img
                src={trainSrc}
                alt="src"
                height={32}
                width={32}
                className="mx-4"
              />
              <input
                type="text"
                className="w-full h-full py-6 rounded-xl text-black px-4 outline-none text-lg"
                placeholder="From"
              />
            </div>
            <div className="rounded-xl flex bg-white">
              <img
                src={trainDest}
                alt="to"
                height={32}
                width={32}
                className="mx-4"
              />
              <input
                type="text"
                className="w-full h-full py-6 rounded-xl text-black px-4 outline-none text-lg"
                placeholder="To"
              />
            </div>
            <div className="rounded-xl flex bg-white">
            <img
                src={cal}
                alt="to"
                height={24}
                width={24}
                className="mx-4"
              />
              <input
                type="text"
                className="w-full h-full py-6 rounded-xl text-black px-4 outline-none text-lg"
                placeholder="Journey Date"
              />
            </div>
          </div>

          <div className="flex items-center justify-center pt-8">
            <button className="bg-blue-800 text-xl text-white px-8 py-3 rounded-full hover:scale-105 transition-all shadow-xl shadow-white/20 border">
              Search
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:block backdrop-blur-md w-full bg-white/40  rounded-xl mt-8">
            <div className="flex gap-2">
              <div className="flex-1 rounded-xl flex bg-white ">
                <img
                  src={ticket}
                  alt="src"
                  height={24}
                  width={24}
                  className="mx-4 my-5"
                />
                <input
                  type="text"
                  className="w-full h-full py-6 rounded-xl text-black px-4 outline-none text-xl"
                  placeholder="Enter your PNR Number"
                />
              </div>
            </div>
          </div>
          {/* Resp */}
          <div className="md:hidden flex rounded-xl bg-white mt-4 ">
                <img
                  src={ticket}
                  alt="src"
                  height={24}
                  width={24}
                  className="mx-4 my-5"
                />
                <input
                  type="text"
                  className="w-full h-full py-6 rounded-xl text-black px-4 outline-none text-lg"
                  placeholder="Enter your PNR Number"
                />
              </div>
          <div className="flex items-center justify-center pt-8">
            <button className="bg-blue-800 text-xl text-white px-8 py-3 rounded-full hover:scale-105 transition-all shadow-xl shadow-white/20 border">
              Check
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
