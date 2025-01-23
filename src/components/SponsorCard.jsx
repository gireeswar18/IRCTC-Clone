import React from "react";

const SponsorCard = ({ sp }) => {

  return (
    <div
      className="bg-white p-2 rounded-xl border flex flex-col justify-center items-center gap-4 shadow-md"
    >
      <div className="flex size-32 justify-center items-center object-fit">
        <img
          src={sp.img}
          alt={sp.title}
          className="rounded-xl bg-clip-text object-cover"
        />
      </div>
      <div className="p-2">
        <p className="text-lg font-semibold text-center">{sp.title}</p>
      </div>
    </div>
  );
};

export default SponsorCard;
