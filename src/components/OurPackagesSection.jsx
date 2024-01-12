function OurPackagesSection() {
  return (
    <div className="bg-black p-20 flex justify-around">
      <div className="grid grid-cols-2 grid-rows-2 w-1/2 gap-5">
        <div className="flex justify-center items-center">
          <img src="/images/our-package-1.png" alt="package-1" />
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/our-package-2.png" alt="package-2" />
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/our-package-3.png" alt="package-3" />
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/our-package-4.png" alt="package-4" />
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div>
          <h3 className="text-white text-[40px]">Our packages</h3>
          <p className="text-white">
            Embark on a journey where every step is a story and evry destination
            is a chapter waiting to be written
          </p>
          <div className="my-5 ">
            <button className="w-[100px]  p-2 rounded-md bg-[#1ED760]">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPackagesSection;
