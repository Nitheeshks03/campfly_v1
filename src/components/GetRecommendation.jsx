function GetRecommendation() {
  return (
    <div className="w-full font-sans flex">
      <div className="object-cover md:block hidden rounded-s-xl  overflow-hidden">
        <img src="/images/get-recommendations.png" className="h-full" alt="get-recommendations" />
      </div>
      <div className="bg-black w-full md:px-20 sm:p-10 p-5 md:rounded-e-xl">
        <h3 className="md:text-[40px] sm:text-[30px] text-[20px] mb-2 text-white">Plan Your Dream Trip</h3>
        <form action="submit" className="flex flex-col">
          <label htmlFor="location" className="text-white">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter destination"
            className="rounded-md p-2 bg-black border-2 border-zinc-800"
          />
          <label htmlFor="travel-date" className="text-white pt-5">
            Travel Dates
          </label>
          <input
            type="date"
            id="travel-date"
            className="rounded-md p-2 text-white bg-black border-2 border-zinc-800"
          />
          <button className="sm:w-[250px]  mt-8 p-2 rounded-md bg-[#1ED760]">
            Get Recommendations
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetRecommendation;
