import React from "react";
import cv from "../../assets/Curriculum Vitae - Bryan Castano San Segundo.pdf";
import Toastify from "toastify-js";
import "../../styles/descargarcv.css";
const handleDownload = () => {
  Toastify({
    text: "Ha descargado el CV de Bryan Castaño",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    
  }).showToast();
};

const Descargarcv = (props) => {
return (
<div className="descargarCV swing-in-left-fwd">
      <a href={cv} download className="cv-button" onClick={handleDownload} id="documentoPdf">
        Descargar CV
      </a>
      {/* <iframe src={pdfUrl} title="Curriculum" /> */}
      <object data={cv} type="application/pdf">      
      </object>
    </div>
  );
};

export default Descargarcv;
