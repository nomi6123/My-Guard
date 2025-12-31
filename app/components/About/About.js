import React from "react";

const About = () => {
  return (
    <div id="about" className="mb-20 mt-20 px-4 sm:px-8  ">
      <div className="bg-white w-full mx-auto max-w-[1300px] ">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-3 justify-center items-center">
          
          {/* Background Image Section */}
          <div
            style={{
              backgroundImage: "url('/about-img.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="bg-no-repeat w-full h-[250px] sm:h-[300px] lg:h-[400px] lg:w-[45%] lg:ml-10"
          ></div>

          {/* Content Section */}
          <div className="bg-white w-full lg:w-[50%] p-6 sm:p-8 lg:p-4 lg:py-12 lg:-translate-x-20">
            <section>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-black">
                Who Are We?
              </h3>
              <div className="bg-yellow-400 w-[60px] sm:w-[80px] h-2 sm:h-3 rounded-full mt-2"></div>
              <p className="text-black text-base sm:text-lg lg:text-xl mb-2 leading-relaxed tracking-tight mt-3 sm:mt-3">
                Your safety is our top priority. We’re here to keep you secure,
                shielding you from harm and safeguarding against any threats.
                <br />
                Rely on us to stand by you and provide steadfast protection at
                all times.
              </p>
              <button
                className="flex items-center justify-center w-fit h-fit px-4 sm:px-6 py-1 sm:py-2 mt-6 text-base sm:text-lg lg:text-xl 
                bg-[#F1DB25] text-white border border-transparent 
                hover:bg-transparent hover:text-[#F1DB25] hover:border-[#F1DB25] 
                transition duration-500"
              >
                Read more
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
