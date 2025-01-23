import React from "react";
import packages from "../assets/HolidayPackages";
import Card from "./Card";

const ExploreHoliday = () => {

  return (
    <div className="bg-blue-800 pt-8">
      <h2 className="text-center text-4xl text-white font-semibold">
        Explore our
      </h2>
      <p className="text-xl font-semibold text-center text-white">Holiday Packages</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 px-[10%] py-8 gap-8">
        {
            packages.map((p, ind) => (
                <Card key={ind} pack={p} />
            ) )
        }
      </div>
    </div>
  );
};

export default ExploreHoliday;
