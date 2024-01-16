
function BookingSuccess() {
  return (
    <div className="text-center">
        <h2 className="text-4xl">Thank you for bookng</h2>
        <p className="mt-10">Trip ID CMP23456</p>
        <div className="flex justify-center mt-5 ">
            <img src="/images/get-recommendations.png" className="w-[50%] rounded-md" alt="Booking-success" />
        </div>
        <p className="text-xl text-[#787878] mt-5">Reservation confirmed! We'll guide you through payment within 30 mins. Questions ? Feel free to ask. Safe travels!</p>
    </div>
  )
}

export default BookingSuccess