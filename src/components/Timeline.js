import React, {useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { getTimelineData } from "../services/apiService";
import "./Timeline.css";
import { FaHome } from "react-icons/fa";

 function Timeline() {
    const navigate = useNavigate();
    const [timeline, setTimeline] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
      getTimelineData().then((data) => {
        setTimeline(data);
        setLoading(false);
      })
    })
    if(loading) return <p>Timeline Loading...</p>;
    return (
    <div>
        <div className="button-group">
          <button onClick={() => navigate("/")}><FaHome size={20} /></button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          <button onClick={() => navigate("/experience")}>Experience</button>
        </div>
       <div className="timeline-container">
      <h2>Career Timeline</h2>
      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <span className="timeline-duration">{item.duration}</span>
              <p style={{color:"#64d2e6", fontSize: "14px" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>)
}

export default Timeline;