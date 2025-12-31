import React from "react";

const services = [
  {
    img: "/s1.svg",
    title: "Home Security",
    description:
      "Our guards are committed to protecting your home from any harm or threats, ensuring safety and peace of mind. With us, your home stays secure and well-guarded. Trust us to be the shield that keeps your loved ones safe.",
    button: "Read more",
  },
  {
    img: "/s2.svg",
    title: "Office Security",
    description:
      "Our security team ensures a safe and secure office environment, protecting against any potential threats. We prioritize the well-being of your employees and assets, keeping intruders and risks at bay. Trust us to maintain a workplace where safety comes first.",
    button: "Read more",
  },
  {
    img: "/s3.svg",
    title: "Bodyguard",
    description:
      "Our bodyguards provide reliable, personalized protection to keep you safe wherever you go. Trained to handle any situation, they stay vigilant and responsive, ensuring your security at all times. Trust our team to prioritize your safety with professionalism and discretion.",
    button: "Read more",
  },
];

const Services = () => {
  return (
    <div id="services">
      <div className="bg-[#1C1C1C] w-full flex flex-col items-center py-16 px-4">
        <div className="flex flex-col justify-center items-center h-fit mb-8 p-3">
          <h2 className="uppercase text-white text-3xl md:text-4xl font-bold">
            Our Services
          </h2>
          <div className="bg-yellow-400 w-12 sm:w-16 h-2 rounded-full mt-2"></div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-6 w-full max-w-6xl">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="bg-white w-full sm:w-[48%] lg:w-[30%] flex flex-col justify-between items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-20 sm:h-24 md:h-28 object-cover mb-4"
                />
                <h3 className="font-bold uppercase text-xl sm:text-2xl mb-2 text-center">
                  {service.title}
                </h3>

                <p className="text-center text-sm sm:text-base mb-4 p-1 line-clamp-4">
                  {service.description}
                </p>

                <button
                  className="flex items-center justify-center w-fit px-7 h-fit py-2 mt-6 text-sm md:text-base lg:text-lg 
                bg-[#F1DB25] text-white border border-transparent 
                hover:bg-transparent hover:text-[#F1DB25] hover:border-[#F1DB25] 
                transition duration-500"
                >
                  {service.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
