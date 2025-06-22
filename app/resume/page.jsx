// import AboutTwo from "@/components/homes/about/AboutTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
// import PersonalInfoTwo from "@/components/homes/personalInfo/PersonalInfoTwo";
import ResumeTwo from "@/components/homes/resume/ResumeTwo";
import React from "react";

export const metadata = {
  title: "Resume || Aditya Sharma - AI/ML Student",
  description:
    "Explore Aditya Sharma's resume – an aspiring AI/ML engineer from AKGEC passionate about solving real-world problems using data and intelligent systems.",
};

export default function Page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <ResumeTwo />
      </div>
    </>
  );
}
