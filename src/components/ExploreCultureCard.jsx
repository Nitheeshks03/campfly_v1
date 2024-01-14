import { MdArrowRightAlt } from "react-icons/md";

function ExploreCultureCard() {
  return (
    <div className="w-[532px] p-1 border rounded-xl">
      <div className="cover">
        <img
          src="/images/explore_card.png"
          className="w-full"
          alt="explore new cultures"
        />
      </div>
      <div className="p-2">
        <div className="mt-3">
          <p className="text-xl font-medium">
            Munnar
            <span className="text-xs text-[#787878] ml-2">Town in kerala</span>
          </p>
        </div>
        <div className="mt-3">
          <p className="text-[#787878] text-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            pharetra ligula at posuere. Aenean vitae porttitor erat. Integer sem
            leo, elementum id maximus tempus, tincidunt in massa.
          </p>
        </div>
        <div className="font-medium text-[14px] mt-3">Get there</div>
        <div className="flex mt-3">
          <div className="w-[100px] h-[35px] rounded-lg bg-gray-300 flex justify-center items-center  text-gray-600">
            Jan-dec
          </div>
          <div className="w-[100px] h-[35px] rounded-lg bg-gray-300 flex justify-center items-center  text-gray-600 ml-3">
            Jan-dec
          </div>
          <div className="w-[100px] h-[35px] rounded-lg bg-gray-300 flex justify-center items-center  text-gray-600 ml-3">
            Jan-dec
          </div>
        </div>
        <div className="font-medium text-[14px] mt-3">Things to do</div>
        <div className="grid grid-cols-4 text-[10px] mt-3">
          <div>
            <img src="/images/things_to_do.png" alt="Things to do" />
            <p className="truncate mt-2">Eravikulam national park</p>
          </div>
          <div>
            <img src="/images/things_to_do.png" alt="Things to do" />
            <p className="truncate mt-2">Mattupetty dam</p>
          </div>
          <div>
            <img src="/images/things_to_do.png" alt="Things to do" />
            <p className="truncate mt-2">Tea museum</p>
          </div>
          <div>
            <p className="text-[32px] text-[#787878]">10+</p>
            <a href="#" className="text-[#787878] text-[10px] underline">
              more things to do
            </a>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <button className="w-[222px] flex items-center justify-center text-xs rounded-md h-[30px] bg-[#1ED760]">
            Explore packages
            <span className="ml-1">
              <MdArrowRightAlt className="text-[15px] " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreCultureCard;
