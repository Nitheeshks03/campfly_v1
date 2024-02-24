import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";


function ContactForm({ setContactDetails, nextStep }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactDetails(formData);
    nextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto font-sans mt-8 rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block font-medium">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              className="w-full p-2 mt-2 border rounded-md"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-medium">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 mt-2 border rounded-md"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mt-2 border rounded-md"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="phoneNumber" className="block font-medium">
            Phone number
          </label>
          <PhoneInput
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
            className="mt-8"
          />
        </div>

        <div className="max-w-2xl mx-auto mt-8">
          <button
            className="w-full h-16 bg-green-500 text-black rounded-md font-medium"
            type="submit"
          >
            Preview Booking
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
