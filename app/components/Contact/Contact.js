import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/contact-bg.jpg')] bg-cover bg-center object-fill"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contact Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase text-white text-3xl md:text-4xl font-bold">
          Get in touch
        </h2>
        <div className="bg-yellow-400 w-12 sm:w-16 h-2 rounded-full mt-2 mb-4"></div>

        <form className="flex flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[70%] xl:w-[70%] gap-4 px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 lg:p-2 mb-4 bg-white border border-gray-600 rounded text-black placeholder-black placeholder:font-bold text-base lg:text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 lg:p-2 mb-4 bg-white border border-gray-600 rounded text-black placeholder-black placeholder:font-bold text-base lg:text-lg"
          />
          <input
            type="text"
            placeholder="Phone number"
            className="p-2 lg:p-2 mb-4 bg-white border border-gray-600 rounded text-black placeholder-black placeholder:font-bold text-base lg:text-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="p-2 lg:p-3 mb-4 bg-white border border-gray-600 rounded text-black placeholder-black placeholder:font-bold text-base lg:text-lg"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center w-full md:w-fit px-10 py-3 mt-4 text-sm md:text-base lg:text-lg 
            bg-[#F1DB25] text-white border border-transparent font-bold 
            hover:bg-transparent hover:text-[#F1DB25] hover:border-[#F1DB25] 
            transition duration-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
