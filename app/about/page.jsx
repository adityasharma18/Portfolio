import React from "react";
import AboutTwo from "@/components/homes/about/AboutTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
// import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";

export const metadata = {
  title: "About || Aditya Sharma",
  description:
    "Aspiring AI/ML Engineer | B.Tech Student at AKGEC | Passionate about data, models & real-world problem-solving.",
};

export default function Page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <div className="mt-page-area z-index-3">
          <div className="container">
            <AboutTwo />
            {/* <PersonalInfoTwo /> */}
          </div>
        </div>
      </div>
    </>
  );
}
