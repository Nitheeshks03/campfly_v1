import React from "react";
import '../App.css'

const Group2214 = () => {
  return (
    <div className="relative font-sans">
      <div
        className="bg-cover bg-center bg-img relative"
        style={{
          backgroundImage:
            "linear-gradient(80.1deg, rgba(0,0,0,1) 20.67%, rgba(0, 0, 0, 0) 66.08%), url(/images/bagpacker-bg.png)",
        }}
      >
       
        <div className="absolute inset-0 flex flex-col items-start justify-center p-4 sm:ml-10 md:ml-14 lg:ml-14 ml-8 sm:p-8">
          <h1 className="text-4xl font-semibold text-[#fafafa] border-b-2 border-white tracking-wide pb-2">
            We are Campfly
          </h1>

         
          <div className="flex mt-8">
           
            <div className="mr-8">
              <h2 className="text-base font-normal text-[#fafafa] tracking-wide mb-2">
                Destinations Explored
              </h2>
              <p className="text-5xl md:text-6xl lg:text-6xl font-medium text-[#fafafa] tracking-wide">200+</p>
            </div>

            
            <div>
              <h2 className="text-base font-normal text-[#fafafa] tracking-wide mb-4">
                Happy Customers
              </h2>
              <p className="text-4xl md:text-5xl lg:text-5xl font-medium text-[#fafafa] tracking-wide">5000+</p>
            </div>
          </div>

          
          <div className="mt-8">
            <p className="text-base font-light text-[#fafafa] tracking-wide">
              "Unleash your inner explorer with Campfly, where the journey is a
              symphony of discovery, and every destination is a note waiting to
              be played. Join us in <br></br> composing the melody of your travels, where
              the world is your canvas and each adventure is a stroke of
              brilliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group2214;
