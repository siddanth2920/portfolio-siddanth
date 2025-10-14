import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "./Experience.css";
import { FaHome } from "react-icons/fa"; // Font Awesome Home icon


if (process.env.NODE_ENV === "development") {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
} else {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
}

function Experience() {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const resumeFile = window.location.origin + "/resumeFile.pdf";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="home-container">
      <div className="button-group">
        <button onClick={() => navigate("/")}><FaHome size={20} /></button>
        <button onClick={() => navigate("/timeline")}>Timeline</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
      <div className="pdf-viewer">
        {/* <h1>Resume</h1> */}
        <Document
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
