import React from "react";
const guards = [
  { img: "/t1.jpg", name: "Martin Anderson", title: "supervisor" },
  { img: "/t2.jpg", name: "Denny Butler", title: "supervisor" },
  { img: "/t3.jpg", name: "Nathan Mcpherson", title: "supervisor" },
];
const Guards = () => {
  return (
    <div id="guards" className="w-full flex flex-col items-center py-16 px-4 ">
      <div className="flex flex-col justify-center items-center text-center h-fit mb-8 p-3 ">
        <h2 className="uppercase text-black text-3xl md:text-4xl font-bold">
          Our Guards
        </h2>
        <div className="bg-yellow-400 w-12 sm:w-16 h-2 rounded-full mt-2"></div>
        <p className="mt-6 text-gray-800 max-w-2xl">
          Our bodyguards provide reliable, personalized protection to keep you
          safe wherever you go. <br /> Trained to handle any situation, they
          stay vigilant and alert.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {guards.map((guard, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[280px] md:w-[300px] lg:w-[340px] h-fit bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="w-full h-[430px] bg-cover bg-center flex justify-center items-end"
              style={{ backgroundImage: `url(${guard.img})` }}
            >
              <div className="flex flex-col justify-center items-center w-full py-4 bg-black bg-opacity-60 text-center">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                  {guard.name}
                </h2>
                <div className="font-semibold text-gray-300">{guard.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="flex items-center justify-center w-fit px-10 py-3 mt-6 text-sm md:text-base lg:text-lg 
                bg-[#F1DB25] text-white border border-transparent  font-bold 
                hover:bg-transparent hover:text-[#F1DB25] hover:border-[#F1DB25] 
                transition duration-500"
      >
        View All
      </button>
    </div>
  );
};

export default Guards;
