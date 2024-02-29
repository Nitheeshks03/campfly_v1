
import React from "react";
import '../App.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const About = () => {
  
  const sections = [
    {
      heading: "About Us",
      text: "Welcome to Campfly, a travel company for travelers by travelers. We are a passionate team of travel enthusiasts dedicated to creating tailor-made experiences for our customers. With a commitment to excellence, we strive to make every moment of your travel safe, memorable, and extraordinary.",
    },
    {
      heading: "Our Mission",
      text: "At Campfly, our mission is to inspire and empower people to explore the world. We understand that every individual is different and their takeaways from all experiences differ. That is why we believe in the customization of our travel packages. Our goal is to curate unique journeys that go beyond traditional tourism, providing authentic and immersive experiences. We want to bring every aspect of travel, including explorations, experiences, activities and more under one umbrella so that anyone can travel anywhere without breaking out of their comfort zone.",
    },
    {
      heading: "Who We Are",
      text: "Founded in 2019, Campfly has grown from a hobby of two travelers who met in the apple-clad valleys of Manali to a team of enterprising young minds who are only connected by their passion for travel. Our team consists of enthusiastic youngsters who started traveling at a very young age to people who are also genuinely passionate about discovering new destinations and cultures.",
    },
    {
      heading: "What Sets Us Apart",
      text: "Personalized Service: We understand that every traveler is unique, and so are their preferences. Our dedicated team takes the time to understand your individual needs, crafting tailor-made itineraries that align with your interests and desires.\nLocal Expertise: With a network of trusted partners and local guides around the globe, we offer an insider's perspective on each destination. This ensures that you get an authentic and immersive experience wherever you go. \nCommitment to Sustainability: We are committed to responsible tourism and believe in positively impacting the places we visit. Our itineraries are designed with sustainability in mind, promoting eco-friendly practices and supporting local communities.",
    },
    {
      heading: "Our Services",
      text: "Customized Travel Packages: Whether you're seeking a relaxing beach getaway, an adventurous trek, or a cultural immersion, we have a range of customizable travel packages to suit your preferences. \nFamily and Couple Tours: As travelers ourselves, we understand that traveling solo is entirely different from traveling with your family or partner and our packages and services are designed with these individual differences in mind. You’ll not have to worry about their comfort and tranquility once you’ve given us your trust. \nGroup Tours: Join like-minded travelers on our carefully curated group tours for a shared adventure and the opportunity to forge new friendships.",
    },
    {
        heading: "Contact Us",
        text: "Ready to embark on your next journey? Contact us today and let Campfly be the architects of your journey.",
        callText: "+91 8891999253",
        emailText: "info@campfly.in",
      },
      
    ];
  
    return (
      <div className="relative font-sans">
        <div
          className="bg-cover bg-center bg-img relative flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url(/images/group2214-bg.png)", 
            height: "auto",
            width : "100%" 
          }}
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="text-center text-[#707070] p-4 sm:p-8 "
            >
              <h1 className="text-4xl font-semibold border-b-[5px] border-[#1ed760] pb-2 inline-block ">
                {section.heading}
              </h1>
              <div className="mt-8 max-w-7xl mx-auto whitespace-pre-line">
                <p className="text-[18px] font-normal tracking-wide leading-10">
                  {section.text}
                </p>
              </div>
              
              {section.heading === "Contact Us" && (
                <div className="mt-4 flex gap-8 mb-10 items-center justify-center">
                  <div className=" flex items-center">
                  <FaPhoneVolume />
                    <span className="text-[16px] sm:text-[16px] lg:text-[20px]">{section.callText}</span>
                  </div>
                  <div className="flex items-center">
                  <TfiEmail />
                    <span className="text-[16px] sm:text-[16px] lg:text-[20px]">{section.emailText}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default About;

  