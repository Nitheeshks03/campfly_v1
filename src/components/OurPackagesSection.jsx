function OurPackagesSection() {
  return (
    <div className="bg-black font-sans sm:p-20 p-5 lg:flex  lg:justify-around">
      <div className="flex items-center lg:hidden justify-center">
        <div className="text-center">
          <h3 className="text-white sm:text-[40px] text-[30px]">
            Our packages
          </h3>
          <p className="text-white">
            Embark on a journey where every step is a story and evry destination
            is a chapter waiting to be written
          </p>
          <div className="my-5 flex justify-center">
            <button className="w-[100px]  p-2 rounded-md bg-[#1ED760]">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-auto grid-rows-2 lg:w-1/2 gap-5">
        <div className="flex object-cover rounded-xl border border-black relative mx-auto lsm:w-[230px] lsm:h-[210px] justify-center items-center hover:border-white">
          <img
            src="/images/our-package-1.png"
            className="w-full h-full"
            alt="package-1"
          />
          <p className="absolute bottom-2 text-white text-xl">Solo</p>
        </div>
        <div className="flex object-cover border border-black hover:border-white rounded-xl mx-auto relative  lsm:w-[230px] lsm:h-[210px] justify-center items-center">
          <img src="/images/our-package-2.png" alt="package-2" />
          <p className="absolute bottom-2 text-white text-xl">Friends</p>
        </div>
        <div className="flex object-cover border border-black hover:border-white rounded-xl relative mx-auto  lsm:w-[230px] lsm:h-[210px] justify-center items-center">
          <img src="/images/our-package-3.png" alt="package-3" />
          <p className="absolute bottom-2 text-white text-xl">Couple</p>
        </div>
        <div className="flex object-cover border border-black hover:border-white rounded-xl relative mx-auto  lsm:w-[230px] lsm:h-[210px] justify-center items-center">
          <img src="/images/our-package-4.png" alt="package-4" />
          <p className="absolute bottom-2 text-white text-xl">Family</p>

        </div>
      </div>
      <div className="w-1/2 hidden  lg:flex lg:items-center lg:justify-center">
        <div>
          <h3 className="text-white text-[40px]">Our packages</h3>
          <p className="text-white">
            Embark on a journey where every step is a story and evry destination
            is a chapter waiting to be written
          </p>
          <div className="my-5">
            <button className="w-[100px] p-2 rounded-md bg-[#1ED760]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPackagesSection;
