import React, { useEffect, useState } from "react";
import logo from "../assets/navLogo.jpeg";
import { IoClose, IoMenu } from "react-icons/io5";
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

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  const [month, setMonth] = useState(time.getMonth());
  const [showMenu, setShowMenu] = useState(false);

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

  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "June",
    6: "July",
    7: "Aug",
    8: "Sept",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <nav className="fixed bg-white w-full flex px-[5%] py-2 items-center justify-between border-b-2 z-10">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" height={56} width={56} />
        <h2 className="font-bold text-blue-800 text-2xl">Indian Railways</h2>
      </div>

      <div className="font-semibold flex gap-4 items-center">
        <div className="hidden sm:flex">
          <p>
            {time.getDate()}-{months[month]}-{time.getFullYear()}
          </p>
          <p>[{time.toLocaleTimeString()}]</p>
        </div>
        <div className="hidden md:flex gap-2 font-normal text-blue-800">
          <div className="cursor-pointer border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
            Contact us
          </div>
          <div className="cursor-pointer border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
            Help & Support
          </div>
        </div>
        <div className="hidden md:flex gap-2 items-center">
          <button className="border bg-blue-700 text-white px-2 py-1 rounded-md hover:scale-105 transition-all">
            Login
          </button>
          <button className="border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
            Register
          </button>
        </div>
      </div>

      <div className="md:hidden">
        {!showMenu ? (
          <IoMenu size={40} color="#1e40af" onClick={() => setShowMenu(true)} />
        ) : (
          <IoClose
            size={40}
            color="#1e40af"
            onClick={() => setShowMenu(false)}
          />
        )}

        {showMenu && (
          <div className="mt-4 z-100 md:hidden fixed right-1 p-4 flex flex-col gap-4 bg-white h-screen w-[50vw]">
            <div className="flex sm:hidden font-semibold">
              <p>
                {time.getDate()}-{months[month]}-{time.getFullYear()}
              </p>
              <p>[{time.toLocaleTimeString()}]</p>
            </div>
            <div className="flex flex-col gap-4 font-normal text-blue-800">
              <div className="cursor-pointer border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
                Agent Login
              </div>
              <div className="cursor-pointer border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
                Contact us
              </div>
              <div className="cursor-pointer border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
                Help & Support
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button className="border bg-blue-700 text-white px-2 py-1 rounded-md hover:scale-105 transition-all">
                Login
              </button>
              <button className="border-2 px-2 py-1 rounded-md  hover:scale-105 transition-all">
                Register
              </button>
            </div>
            <h2 className="text-lg text-blue-700 text-center font-semibold">
              Connect with us on
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {socialMedia.map((s, ind) => (
                <div
                  key={ind}
                  className="cursor-pointer hover:scale-105 transition-all"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
