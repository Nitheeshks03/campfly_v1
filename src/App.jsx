import "./App.css";
import TrendingCard from "./components/TrendingCard";

function App() {
  return (
    <>
      <div>
        <h1 class="text-5xl font-bold mb-4">Welcome to CampFly.in </h1>
        <label for="datepicker">Select a Date:</label>
        <input type="month" id="bdaymonth" name="bdaymonth" />
      </div>
      {/* card */}
      <div className="flex justify-around">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>

      <h1>explore new culture</h1>

      <div className="w-[540px] p-3 border rounded-lg">
        <div>
          <img src="/images/explore_card.png" alt="explore new cultures" />
        </div>
        <div className="mt-3">
          <p className="text-2xl">
            Munnar<span className="text-sm ml-2">Town in kerala</span>
          </p>
        </div>
        <div className="mt-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
            pharetra ligula at posuere. Aenean vitae porttitor erat. Integer sem
            leo, elementum id maximus tempus, tincidunt in massa.
          </p>
        </div>
        <div className="font-semibold mt-3">Get there</div>
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
        <div className="font-semibold mt-3">Things to do</div>
        <div className="grid grid-cols-4 mt-3">
          <div>
            <img src="/images/things_to_do.png" alt="Things to do" />
            <p className="truncate">Eravikulam national park</p>
          </div>
          <div>
            <img src="/images/things_to_do.png" alt="Things to do" />
            <p className="truncate">Mattupetty dam</p>
          </div>
          <div>
            <img src="/images/things_to_do.png" alt="Things to do" />
            <p className="truncate">Tea museum</p>
          </div>
          <div>
            <p className="text-[32px] text-gray-600">10+</p>
            <a href="#" className="text-gray-600 underline">
              more things to do
            </a>
          </div>
        </div>
        <div>
          <button className="w-[220px] h-[30px] bg-[#1ED760]">
            Explore packages
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
