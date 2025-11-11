import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { getContactData } from "../services/apiService";
import "./Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContactData().then((data) => {
      setContact(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="contact-page">
      <div className="nav-buttons">
        <button onClick={() => navigate("/")}><FaHome size={18} /></button>
        <button onClick={() => navigate("/experience")}>Experience</button>
        <button onClick={() => navigate("/timeline")}>Timeline</button>
      </div>

      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>
        <div className="contact-card">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span>{contact?.phone}</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>{contact?.email}</span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href={contact?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
