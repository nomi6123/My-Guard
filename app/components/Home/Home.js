import React from "react";
const Home = () => {
  return (
    <div id="home" className="">
      <div className='bg-[url("/hero-bg.jpg")]  w-full  h-[90vh] sm:h-[80vh] md:h-[70vh] lg:h-[90vh] bg-center bg-cover object-fill flex justify-items-start items-center'>
        <div className="w-full mx-auto max-w-[1200px]">
          <div className=" p-4 sm:p-6 md:p-10 lg:p-[40px] w-full bg-lime  lg:translate-x-36 max-w-lg md:max-w-xl lg:max-w-2xl ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-white">
              Your Safety
              <br />
              <span className="text-[#F1DB25]">Our Responsibility</span>
            </h2>

            <p className="text-white font-semibold text-lg sm:text-xl md:text-2xl leading-tight tracking-tight mt-4 sm:mt-5 md:mt-7">
              Your safety is our priority—we stand ready to protect you from
              harm and any potential enemies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
              <button className="flex items-center justify-center px-6 py-1 w-fit h-fit sm:px-8 sm:py-2 bg-white text-lg sm:text-xl text-black border border-transparent hover:bg-black hover:text-white hover:border-white transition transform duration-500">
                Read more
              </button>
              <button className="flex items-center justify-center px-6 py-1 w-fit h-fit sm:px-8 sm:py-2 text-white bg-[#F1DB25] text-lg sm:text-xl border border-transparent hover:bg-transparent hover:text-[#F1DB25] hover:border-[#F1DB25] transition transform duration-500">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
