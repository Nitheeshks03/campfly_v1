function BookingModal() {
  return (
    <div className="w-full p-5 border rounded-xl">
      <div className="flex justify-between w-full">
        <div className="text-xl font-medium">Package : Munnar</div>
        <div className="w-[160px] flex items-center justify-center px-4 text-[10px] rounded-[10px] bg-[rgba(30,215,96,0.37)]">
          <p>Member price available</p>
        </div>
      </div>
      <div className="flex mt-10 w-[60%] justify-between">
        <div>
          <input
            className="transform scale-150 checked:bg-black"
            type="radio"
            id="honeymoon"
            name="packageType"
          />
          <label className="ml-2" htmlFor="honeymoon">
            Honeymoon package
          </label>
        </div>
        <div>
          <input
            className="transform scale-150"
            type="radio"
            id="family"
            name="packageType"
          />
          <label className="ml-2" htmlFor="family">
            Family/Friends
          </label>
        </div>
        <div>
          <input
            className="transform scale-150"
            type="radio"
            id="solo"
            name="packageType"
          />
          <label className="ml-2" htmlFor="honeymoon">
            Solo
          </label>
        </div>
      </div>
      <div className="flex w-[70%] mt-4 justify-between">
        <div className="bg-[#1ED760] border drop-shadow-lg text-center rounded-xl  py-2 px-4">
          <p className="font-medium">Premium package</p>
          <p className="text-xs">₹ 11250 per adult</p>
        </div>
        <div className="border drop-shadow-lg text-center rounded-xl  py-2 px-4">
          <p className="font-medium">Mid range package</p>
          <p className="text-xs">₹ 11250 per adult</p>
        </div>
        <div className="border drop-shadow-lg text-center rounded-xl  py-2 px-4">
          <p className="font-medium">Budget package</p>
          <p className="text-xs">₹ 11250 per adult</p>
        </div>
      </div>
      <div>
        <p>start and end date </p>
      </div>
    </div>
  );
}

export default BookingModal;
