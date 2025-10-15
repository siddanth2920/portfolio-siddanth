import React, { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { getContactData } from "../services/apiService";

export default function Contact() {
    const navigate = useNavigate();
    const [contact, setContact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getContactData().then((data) =>{
       setContact(data);
       setLoading(false);
      })
    })
    if(loading) return "<p>loading..</p>";
    return (
    <div>
    <div className="button-group">
    <button onClick={() => navigate("/")}><FaHome size={20} /></button>
    <button onClick={() => navigate("/experience")}>Experience</button>
    <button onClick={() => navigate("/timeline")}>Timeline</button>
  </div>
  <div className="contact-container">
    <p style={{color: "#5f9ea0"}}>Phone: {contact?.phone}</p>  
    <p style={{color: "#5f9ea0"}}>Email: {contact?.email}</p>
    <p style={{color: "#5f9ea0"}}>Linkedin: {contact?.linkedin}</p>
    </div>
  </div>)
}