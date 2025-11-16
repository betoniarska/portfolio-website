// Contact.jsx - Contact form using Formspree



import React, { useState } from "react";
import "/style.css";

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;

const Contact = ({ isOpen, transitioning, onToggle }) => {
  const [status, setStatus] = useState("");

  if (!FORMSPREE_URL) {
    setStatus("Form endpoint not configured!");
    return;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Invalid email address. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={onToggle}
        className={`custom-button ${isOpen ? "open" : ""}`}
        style={{ pointerEvents: "auto" }}
      >
        Contact
      </button>

      {isOpen && (
        <div
          className={`contact-sidebar ${transitioning ? "fade-out" : "fade-in"}`}
        >
          <h1 className="info-text">Get in Touch</h1>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-textarea"
              required
            />
            <button type="submit" className="custom-button3">
              Send Message
            </button>
          </form>

          {status && <p className="info-text">{status}</p>}
        </div>
      )}
    </div>
  );
};

export default Contact;