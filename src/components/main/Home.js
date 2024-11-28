import React from "react";
import bryan from "../../assets/images/foto.jpg";
import Toastify from "toastify-js";
import cv from "../../assets/Curriculum Vitae - Bryan Castano San Segundo.pdf";
import "../../styles/home.css";
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
const Home = (props) => {
  return (
    <div className="home swing-in-left-fwd">
      <div className="foto ">
        <img src={bryan} alt="bryan"></img>
        
      </div>
      <div className="boton">
      <a href={cv} download className="cv-button" onClick={handleDownload} id="documentoPdf">
        Descargar CV
      </a>
      </div>
      <div className="texto">
      <p>
        ¡Saludos! Soy Bryan Castaño. <br />
        Soy un Desarrollador residente en España.
        <br /> Soy Técnico Superior en Desarrollo de Aplicaciones
        Multiplataforma pero actualmente complemento con una reciente inmersión
        autodidacta en distintos lenguajes.
        <br />
        <br /> Mis habilidades más fuertes son HTML, CSS y JavaScript, estoy
        constantemente expandiendo mis conocimientos con nuevas tecnologías y
        herramientas. También cuento con experiencia usando frameworks como
        React. <br />
        <br />
        Estoy entusiasmado por la oportunidad de aportar al equipo, mi
        experiencia renovada y mi disposición para aprender continuamente.
        <br />
        <br />
        Gracias por considerar mi perfil. Estoy listo/a para asumir nuevos retos
        y contribuir al éxito del equipo.
        <br />
        <br />
        Bryan
      </p>
      </div>
      
    </div>
  );
};
export default Home;
