"use client";

import { contactData } from "@/data/contactData";
import { bioData } from "@/data/bioData";
import { profileInfo } from "@/data/profileInfo";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AboutTwo() {
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <div className="mt-page-wrap pt-60 pl-80 pr-80">
      <div className="page-tilte-2-wrap">
        <div className="row">
          <div className="col-12">
            <div className="mt-page-title-wrap mb-40">
              <h2 className="page-title">About Me</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="about-me-2-wrap">
        <div className="row">
          <div className="col-lg-4 col-md-8">
            <div className="mt-personal-info-img">
              <Image
                width={240}
                height={240}
                src={profileInfo.imageSrcThree}
                alt="profile"
              />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="mt-personal-info-wrap mb-40">
              <h4 className="mt-personal-info-title">Who am i?</h4>
              <p className="mt-personal-info-bio-text">{bioData.descOne}</p>
              <p className="mt-personal-info-bio-text">{bioData.descTwo}</p>

              <div className="mt-personal-info-contact">
                <h3 className="title">Personal Info</h3>
                <div className="row">
                  {contactData.map((elm, i) => (
                    <div key={i} className="col-lg-6 col-md-6">
                      <div className="mt-personal-info-contact-item">
                        <div
                          style={{
                            color: `${elm.color}`,
                            fontSize: `${elm.fontSize}`,
                          }}
                          className="icon"
                        >
                          <i className={elm.iconClass}></i>
                        </div>
                        <div className="text">
                          <span>{elm.text.label}</span>
                          <p>{elm.text.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Temporarily removed What I Do section =====
      <div className="what-i-do-2 mb-50">
        ...
      </div>
      */}

      {/* ===== Temporarily removed Clients section =====
      <div className="client-2-wrap bg-light-white-2 pt-40 pb-65">
        ...
      </div>
      */}

      <div className="footer-copyright text-center pt-25 pb-25">
        <span>
          © {new Date().getFullYear()} All Rights Reserved by Aditya Sharma.
        </span>
      </div>
    </div>
  );
}
