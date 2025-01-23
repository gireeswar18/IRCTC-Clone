import React, { useState } from "react";
import externalLink from "../assets/external-link.svg";

const Card = ({ pack }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="p-2 rounded-xl border flex flex-col gap-4 shadow-md cursor-pointer hover:scale-105
      bg-white"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className="grid grid-cols-1 grid-rows-1">
        <img
          src={pack.img}
          alt={pack.title}
          className=" col-start-1 row-start-1 rounded-xl bg-clip-text w-full h-full object-cover"
        />
        {show && (
          <div className="col-start-1 row-start-1 bg-black/50 flex items-center justify-center rounded-xl">
            <button className="flex items-center gap-2 px-4 py-2 text-white rounded-lg">
              Read More
              <span className="">
                <img src={externalLink} height={20} width={20} alt="" />
              </span>
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="text-lg font-semibold">{pack.title}</p>
      </div>
    </div>
  );
};

export default Card;
