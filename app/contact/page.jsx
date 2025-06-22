import ContactTwo from "@/components/homes/contact/ContactTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
import React from "react";

export const metadata = {
  title: "Contact || Aditya Sharma - AI/ML Student",
  description:
    "Aspiring AI/ML Engineer | B.Tech Student at AKGEC | Let's connect and build something awesome!",
};

export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <ContactTwo />
      </div>
    </>
  );
}
