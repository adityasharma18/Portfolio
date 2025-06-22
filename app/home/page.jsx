import HeaderFive from "@/components/homes/headers/HeaderFive";
import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import React from "react";

export const metadata = {
  title: "Home || Aditya Sharma - AI/ML Student",
  description:
    "AI/ML enthusiast | B.Tech Student at AKGEC | Passionate about data, models, and solving real-world problems through intelligent systems.",
};

export default function Home2() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderFive />
        <div className="mt-page-area z-index-3">
          <div className="container">
            <PersonalInfoTwo />
          </div>
        </div>
      </div>
    </>
  );
}
