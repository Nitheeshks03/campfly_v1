import { CiTimer } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiSurferVan } from "react-icons/gi";
import { IoTicketOutline } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

function TrendingCard() {
  return (
    <div className="w-[250px] border rounded-lg p-1">
      <div>
        <img src="/images/card-1.png" alt="card-1" />
      </div>
      <div className="flex  justify-between my-2">
        <div>
          <p className="font-semibold text-2xl">Munnar</p>
          <p className="opacity-70">Town in kerala</p>
        </div>
        <div>
          <div className="border border-red-400 text-red-400 w-20 rounded-xl text-center text-sm font-semibold">
            25% off
          </div>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-2">
        <div className="flex items-center">
          <GiSandsOfTime className="opacity-70" />
          <p className="ml-2 text-xs">5 days / 6 nights</p>
        </div>
        <div className="flex items-center">
          <IoFastFoodOutline className="opacity-70" />
          <p className="ml-2 text-xs">Food included</p>
        </div>
        <div className="flex items-center">
          <GiSurferVan className="opacity-70" />
          <p className="ml-2 text-xs">Transportation</p>
        </div>
        <div className="flex items-center">
          <IoTicketOutline className="opacity-70" />
          <p className="ml-2 text-xs">All tickets</p>
        </div>
      </div>
      <hr />
      <div className="flex items-center p-5">
        <span className="opacity-50 line-through">₹ 1000</span>{" "}
        <p className="text-3xl font-bold">₹ 7500</p>
      </div>
    </div>
  );
}

export default TrendingCard;
