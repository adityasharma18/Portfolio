"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();
  const [activeInputBoxes, setActiveInputBoxes] = useState([]);

  const handleClick = (field) => {
    setActiveInputBoxes((prev) =>
      !prev.includes(field) ? [...prev, field] : prev
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7tsbbk",      // ✅ Service ID
        "template_fpogljd",     // ✅ Template ID
        form.current,
        "VTtYlYKFXy5yxDC3J"     // ✅ Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          document.getElementById("myForm").reset();
          setActiveInputBoxes([]);
        },
        () => {
          toast.error("Oops! Something went wrong.");
        }
      );
  };

  return (
    <form id="myForm" ref={form} onSubmit={sendEmail} style={{ maxWidth: "600px", margin: "auto" }}>
      <div className="form-input-item" style={{ marginBottom: "20px" }}>
        <label style={{ color: activeInputBoxes.includes("name") ? "#FE7878" : "#fff" }}>
          Name *
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onClick={() => handleClick("name")}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1c1c1c",
            color: "#fff",
            border: activeInputBoxes.includes("name")
              ? "1px solid #FE7878"
              : "1px solid #333",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>

      <div className="form-input-item" style={{ marginBottom: "20px" }}>
        <label style={{ color: activeInputBoxes.includes("email") ? "#1B74E4" : "#fff" }}>
          Email *
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onClick={() => handleClick("email")}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1c1c1c",
            color: "#fff",
            border: activeInputBoxes.includes("email")
              ? "1px solid #1B74E4"
              : "1px solid #333",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>

      <div className="form-input-item" style={{ marginBottom: "20px" }}>
        <label style={{ color: activeInputBoxes.includes("message") ? "#CE65F3" : "#fff" }}>
          Message *
        </label>
        <textarea
          name="message"
          placeholder="Write your message"
          rows="5"
          required
          onClick={() => handleClick("message")}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#1c1c1c",
            color: "#fff",
            border: activeInputBoxes.includes("message")
              ? "1px solid #CE65F3"
              : "1px solid #333",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          style={{
            backgroundColor: "#00bfff",
            color: "#fff",
            padding: "12px 30px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>
      </div>
    </form>
  );
}
