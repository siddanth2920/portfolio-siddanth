// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";
// import { getHomeData } from "../services/apiService";

// function Home() {
//   const navigate = useNavigate();

//   const [homeData, setHomeData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//      getHomeData().then((data) => {
//        setHomeData(data);
//        setLoading(false);
//      })
//   }, [])
//   return (
//     <div className="home-container">
//       <div className="button-group">
//         <button onClick={() => navigate("/experience")}>Experience</button>
//         <button onClick={() => navigate("/timeline")}>Timeline</button>
//         <button onClick={() => navigate("/contact")}>Contact</button>
//       </div>
//       <h1>Senior Frontend Engineer</h1>
//       {loading ? (<p>loading...</p>) :
//         (<p style={{fontSize: "18px", width:"832px", color:"rgb(103 255 254 / 89%)", fontFamily: "fangsong"}}>{homeData?.description}</p>)}
//     </div>
//   );
// }

// export default Home;
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
    });
  }, []);

  return (
    <div className="home-page">
      <div className='title-glow'>
        <p className='sub-head'>Siddanth Konanki</p>
      </div>
      <div className="nav-buttons">
        <button onClick={() => navigate("/experience")}>Experience</button>
        <button onClick={() => navigate("/timeline")}>Timeline</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>

      <div className="intro-section">
        <h1 className="title-glow">Senior Frontend Engineer</h1>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="intro-card">
            <p>{homeData?.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
