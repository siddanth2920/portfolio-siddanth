import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "./Experience.css";
import { FaHome, FaDownload } from "react-icons/fa";


// if (process.env.NODE_ENV === "development") {
//   pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     "pdfjs-dist/build/pdf.worker.min.mjs",
//     import.meta.url
//   ).toString();
// } else {
//   pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// }
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Experience() {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);
//  const resumeFile = "/resumeFile.pdf";
const resumeFile = `${process.env.PUBLIC_URL || ''}/resumeFile.pdf`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }
  function onDocumentLoadError(error) {
    console.error("Error loading PDF:", error);
    setError(error.message);
  }
  return (
    <div className="experience-container">

      {/* <div className="button-group">
        <button onClick={() => navigate("/")}><FaHome size={20} /></button>
        <button onClick={() => navigate("/timeline")}>Timeline</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div> */}
      <div className="nav-buttons">
        <button onClick={() => navigate("/")}><FaHome size={20} /></button>
        <button onClick={() => navigate("/timeline")}>Timeline</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button
          className="download-btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href = resumeFile;
            link.download = "Siddanth_K_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          title="Download Resume"
        >
          <FaDownload size={18} />
        </button>

      </div>
      <div className='title-glow'>
        <p className='sub-head'>Resume</p>
      </div>
      <div className="pdf-viewer">
        {/* <h1>Resume</h1> */}
        {/* <Document
          file={resumeFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Loading PDF...</p>}
        >
          <Page
            pageNumber={pageNumber}
            scale={0.9}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document> */}
            {error && (
          <div style={{ color: 'red', padding: '20px' }}>
            Error loading PDF: {error}
          </div>
        )}
        <Document
          file={resumeFile}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<p>Loading PDF...</p>}
          error={<p>Failed to load PDF. Please try again later.</p>}
        >
          <Page
            pageNumber={pageNumber}
            width={Math.min(window.innerWidth * 0.9, 600)}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
        <div className="page-controls">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Prev
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Experience;
