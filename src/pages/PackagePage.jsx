import Navbar from "../components/Navbar";

function PackagePage() {
  return (
    <div>
      <div className="relative h-screen">
        <Navbar />
        <div className="absolute object-cover h-full w-full top-0 left-0 z-10">
          <img
            className="w-full h-full"
            src="/images/munnar.png"
            alt="carousel-1"
          />
          <div className="flex items-center justify-center absolute inset-0">
            <div className="w-1/2 bg-transparent text-white p-8">
              <h3 className="text-[24px] font-medium">
                Munnar: Honeymoon package
              </h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur. Sed ullamcorper vitae
                pharetra et non mauris maecenas in elementum. Senectus ac neque
                massa elementum arcu integer malesuada libero. Proin a facilisis
                scelerisque arcu viverra in. Sollicitudin et vitae lectus eget
                massa ipsum. Faucibus ornare ipsum quis sollicitudin quisque
                vehicula odio enim in. Vel tortor interdum egestas ultrices
                lorem enim quis.
              </p>
            </div>
            <div className="w-1/2 p-8">
              <div>
                <img src="/images/munnar-small.png" alt="munnar" />
              </div>
              <div className="flex justify-around mt-3">
                <div>
                  <img src="/images/package-image-1.png" alt="package-1" />
                </div>
                <div>
                  <img src="/images/package-image-2.png" alt="package-2" />
                </div>
                <div>
                  <img src="/images/package-image-3.png" alt="package-3" />
                </div>
                <div>
                  <img src="/images/package-image-4.png" alt="package-4" />
                </div>
                <div>
                  <img src="/images/package-image-5.png" alt="package-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-2/3">
          <h3 className="text-xl">Get there</h3>
          <div>
            <div className="bg-[#E6E6E6] text-[#787878] w-max">
                Cochin International Airport
            </div>
            <div className="bg-[#E6E6E6] text-[#787878] w-max">
                Ernakulam junction
            </div>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
}

export default PackagePage;
