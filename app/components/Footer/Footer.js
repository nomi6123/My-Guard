import React from "react";
import { PiMapPinFill } from "react-icons/pi";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#101010] pb-3">
      <div className="bg-[#101010] p-10 md:p-[40px] py-10 w-full mx-auto max-w-[1300px] flex max-xl:flex-wrap justify-center items-center gap-8 text-white">
        {/* Gurder Section */}
        <div className="text-white w-full md:w-1/2 lg:w-[25%] px-2 flex flex-col gap-6">
          <h2 className="font-bold text-3xl">Gurder</h2>
          <p className="font-semibold">
            Your safety is our top priority. We’re here to keep you secure,
            shielding you from harm and safeguarding against any threats. Rely
            on us to stand by you and provide steadfast protection at all times.
          </p>
        </div>

        {/* Useful Link Section */}
        <div className="text-white w-full md:w-1/2 lg:w-[25%] px-2 flex flex-col gap-6">
          <h2 className="font-semibold text-2xl">Useful Link</h2>
          <p className="font-semibold">
            Your safety is our top priority. We’re here to keep you secure,
            shielding you from harm and safeguarding against any threats. Rely
            on us to stand by you and provide steadfast protection at all times.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex w-full md:w-1/2 lg:w-[20%] px-2 flex-col gap-6 ">
          <h2 className="font-semibold text-2xl">Contact Us</h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <PiMapPinFill className="text-xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <h4>Lohare Panjab Pakistan</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <h4>Call: +033229999766</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <h4>demo@gamil.com</h4>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-white w-full md:w-1/2 lg:w-[25%] px-2 flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">Newsletter</h2>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter your Email"
              className="p-[7px] pr-5 rounded-full w-full"
            />
            <button
              className="flex items-center uppercase justify-center w-fit px-10 py-2 rounded-full mt-2 text-sm md:text-base lg:text-lg 
                bg-[#F1DB25] text-white border border-transparent font-bold 
                hover:bg-transparent hover:text-[#F1DB25] hover:border-[#F1DB25] 
                transition duration-500"
            >
              Subscribe
            </button>
            <div className="flex mt-3 items-center gap-4">
              <FaFacebook className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <FaTwitter className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <FaYoutube className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
              <FaInstagram className="text-2xl hover:text-yellow-500 transition-transform duration-300 transform hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-[16px] mt-4">
        © 2024 All Rights Reserved. Design by Free developer Noman.
      </p>
    </div>
  );
};

export default Footer;
