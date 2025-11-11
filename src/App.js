//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { useTheme  } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
      {/* <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div className='main-head'>
         Portfolio
         <p className='sub-head'>(Siddanth Konanki)</p>
        </div> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
