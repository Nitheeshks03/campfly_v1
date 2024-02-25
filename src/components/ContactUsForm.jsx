import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

function ContactUsForm() {
  return (
    <div className="background-container">
      <div className="background-image">
        <div className="overlay-div ml-20">
          <div className="section">
            <h2>Contact us today</h2>
          </div>

          <div className="call-email-section flex ">
            <div className="contact-info flex items-center text-white">
              <div>
                <div className="flex items-center">
                  <FaPhoneVolume /> <p className="ml-2">Call</p>
                </div>
                <p>+91 8891999253</p>
              </div>
            </div>

            <div className="contact-info email flex items-center text-white">
              <div>
                <div className="flex items-center">
                  <TfiEmail />
                  <p className="ml-2">Email ID</p>
                </div>
                <p>info@campfly.in</p>
              </div>
            </div>
          </div>

          <div className="request-call-section text-white mt-2">
            <h3>Want us to call you?</h3>
            <div className="flex items-center mt-2 space-x-5">
              <textarea
                className="w-35 ml-0 p-1 border bg-transparent border-white text-white rounded-lg resize-none"
                rows="1"
                placeholder="Full name"
              ></textarea>
              <select className="ml-2 p-1 border bg-transparent border-white text-white rounded-lg">
                <option value="+1">+91</option>
              </select>

              <textarea
                className="w-35 ml-2 p-1 border bg-transparent border-white text-white rounded-lg resize-none"
                rows="1"
                placeholder="1234 5678 90"
              ></textarea>
              <button className="bg-custom-green text-black px-2 py-1 ml-2 flex items-center rounded-lg hover:bg-black hover:text-[#1ed760]">
                Request a call back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
