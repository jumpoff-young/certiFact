import React, { useState } from "react";
import HeroImage from "./assets/Images/LandingPage/Hero-Image.png";

const HeroSection = () => {
  const [query, setQuery] = useState(""); // State to store the search query

  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update the query state on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the search logic here, like calling an API or filtering data
    console.log("Search query:", query);
  };

  return (
    <div className="w-screen max-w-full m-auto px-[24px] lg:py-[64px] lg:px-6 md:px-0">
      <div className="w-full max-w-full lg:max-w-[91.111%] m-auto flex flex-col items-center lg:flex-row gap-8 lg:justify-between md:flex-row">
        <div className="hero-section-text w-full max-w-full lg:max-w-[45.42%] flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <p className=" text-[12px] tracking-[0.15em] font-semibold text-[#1e1e1e] text-left lg:text-left">
              INCOMING REQUESTS
            </p>
            <h1 className="text-[#1e1e1e] text-4xl leading-[50px] lg:text-[48px] lg:leading-[72px] font-medium w-full max-w-full">
              Manage and verify all requests sent to your organization.
            </h1>
            <p className="text-[#1e1e1e] text-[16px] w-full max-w-full lg:max-w-[543px] leading-[26px]">
              Streamline hiring and admissions with fast, secure credential
              verification tailored for institutions and businesses.
            </p>
          </div>
          <div className="w-full max-w-full flex flex-row gap-[10px]">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-full lg:max-w-[437px]"
            >
              <input
                type="text"
                placeholder="Search Requests by ID, Name, or Organization"
                value={query}
                onChange={handleInputChange}
                className="w-full max-w-[437px] py-[12px] px-4 border border-[#303030] bg-[#f5f5f5] rounded-[8px] text-[12px] text-[#757575] focus:outline-none focus:ring-2 focus:ring-primaryColor"
              />
            </form>
            <button
              type="submit"
              className="text-center w-full max-w-[96px] py-[12px] text-[12px] font-medium text-white rounded-lg bg-[#1273EB]"
            >
              Search
            </button>
          </div>
        </div>
        <div className="hero-section-image w-full max-w-full h-auto object-cover lg:max-w-[480px] lg:max-h-auto ">
          <img src={HeroImage} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
