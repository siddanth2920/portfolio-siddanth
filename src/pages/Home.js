import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { getHomeData } from "../services/apiService";

function Home() {
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     getHomeData().then((data) => {
       setHomeData(data);
       setLoading(false);
     })
  }, [])
  return (
    <div className="home-container">
      <div className="button-group">
        <button onClick={() => navigate("/experience")}>Experience</button>
        <button onClick={() => navigate("/timeline")}>Timeline</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
      <h1>Senior Frontend Engineer</h1>
      {loading ? (<p>loading...</p>) :
        (<p style={{fontSize: "16px", width:"832px", color:"#04b2b1"}}>{homeData?.description}</p>)}
    </div>
  );
}

export default Home;
