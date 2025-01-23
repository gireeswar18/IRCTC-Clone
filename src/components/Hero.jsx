import React from "react";
import img from "../assets/istockphoto-1278345107-612x612.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTelegram,
  FaTumblrSquare,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialMedia = [
  <FaFacebook color="#1877F2" size={40} />,
  <FaWhatsapp color="#25D366" size={40} />,
  <FaYoutube color="#FF0000" size={40} />,
  <FaInstagram color="#E1306C" size={40} />,
  <FaLinkedin color="#0077B5" size={40} />,
  <FaTelegram color="#0088cc" size={40} />,
  <FaPinterest color="#E60023" size={40} />,
  <FaTumblrSquare color="#35465C" size={40} />,
  <FaSquareXTwitter color="#000000" size={40} />,
];

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 px-[5%] py-[8%] gap-12 h-[100vh]">
        <div className="flex flex-col justify-center lg:justify-normal gap-6 p-6 rounded-lg text-justify">
          <h2 className="text-4xl font-semibold text-blue-800 py-4">
            Indian Railways
            <p className="font-normal text-lg">
              Safety | Security | Punctuality
            </p>
          </h2>
          <div className="">
            <p>
              Connecting millions across breathtaking landscapes, Indian
              Railways is the lifeline of the nation. With a legacy of over 170
              years, it offers safe, affordable, and sustainable journeys
              through over 67,000 kilometers of track. Whether you're traveling
              for business, leisure, or adventure, discover the diversity of
              India on every trip. Book your journey today and embark on a
              memorable ride!
            </p>
            <button className="border bg-blue-700 text-xl text-white px-6 py-2 rounded-full hover:scale-105 transition-all w-[40%] mt-4">
              Book now!
            </button>
          </div>
          <div className="hidden lg:block mt-4">
            <h5 className=" rounded-md px-4 py-2 text-blue-700 font-semibold">
              Connect with us on
            </h5>
            <div className="flex gap-4 mt-4">
              {socialMedia.map((icon, ind) => (
                <div
                  key={ind}
                  className="border p-2 rounded-full shadow-md hover:scale-105 transition-all"
                >
                  <a href="">{icon}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-start aspect-square">
          <img
            src={img}
            alt="train"
            className="hidden lg:block rounded-lg shadow-md aspect-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
