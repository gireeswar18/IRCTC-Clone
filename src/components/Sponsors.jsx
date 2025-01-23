import React from "react";
import sponsors from "../assets/Sponsors.js";
import SponsorCard from "./SponsorCard.jsx";

const Sponsors = () => {
  return (
    <div className="px-[5%] py-8 bg-slate-100 xl:bg-blue-800">
      <h2 className="text-3xl font-semibold text-blue-800 xl:text-white text-center">
        Our Payment Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7 gap-4 py-8">
        {sponsors.map((s, ind) => (
          <SponsorCard key={ind} sp={s} />
        ))}
      </div>

      
    </div>
  );
};

export default Sponsors;
