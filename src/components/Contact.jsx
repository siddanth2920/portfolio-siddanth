import React from "react";
import { useNavigate  } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Contact() {
    const navigate = useNavigate();
    return (
    <div>
    <div className="button-group">
    <button onClick={() => navigate("/")}><FaHome size={20} /></button>
    <button onClick={() => navigate("/timeline")}>Timeline</button>
    <button onClick={() => navigate("/experience")}>Experience</button>
  </div>
    <p>My Contact</p>
  </div>)
}