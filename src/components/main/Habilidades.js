import React from "react";
import "../../styles/habilidades.css";
const habilidadesArrayFront = [
  {
    lenguaje: "HTML",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  },
  {
    lenguaje: "CSS",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    lenguaje: "JavaScript",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    lenguaje: "React",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },

  {
    lenguaje: "Wordpress",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ae/WordPress.svg",
  },
];
const habilidadesArrayBack = [
  {
    lenguaje: "NodeJS",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png",
  },
  {
    lenguaje: "Java",
    imagen: "https://www.vectorlogo.zone/logos/java/java-vertical.svg",
  },
  {
    lenguaje: "PHP",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    lenguaje: "SQL",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
];
const Habilidades = () => {
  return (
    <div className="habilidades swing-in-left-fwd">
      <h2>Sobre mí</h2>
      <h3>Estudios realizados:</h3>
      <div className="estudios">
        <div className="tabla-titulos">
          <ul className="titulos">
            <li>
              Desarrollo de Aplicaciones Web (Actualmente)
              {/* <ul className="centro"> */}
            </li>
            <li className="centro">IES Claudio Moyano</li>
            {/* </ul> */}
            <li>
              Técnico Superior en Desarrollo de Aplicaciones Multiplataforma
            </li>
            {/* <ul className="centro"> */}
            <li className="centro">IES Claudio Moyano</li>
            {/* </ul> */}
            <li>Técnico en Sistemas Microinformáticos y Redes</li>
            {/* <ul className="centro"> */}
            <li className="centro">IES Claudio Moyano</li>
            {/* </ul> */}
          </ul>
        </div>
      </div>
      <br />

      <h3>Tecnologías que domino:</h3>
      <div className="cuadrado">
        <h4>Front End:</h4>
        <div className="logos">
  {habilidadesArrayFront.map((habilidad, index) => (
    <div className="logo" key={index}>
      <img
        src={habilidad.imagen}
        alt={habilidad.lenguaje}
        style={{
          WebkitMaskImage: `url(${habilidad.imagen})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          backgroundColor: 'white', 
        }}
      />
      <p>{habilidad.lenguaje}</p>
    </div>
  ))}
</div>
      </div>

      {/* <br /> */}
      <div className="cuadrado">
        <h4>Back End:</h4>
        {/* <br /> */}
        <div className="logos">
          {habilidadesArrayBack.map((habilidad, index) => (
            <div className="logo" key={index}>
              <img src={habilidad.imagen} alt={habilidad.lenguaje}  style={{
          WebkitMaskImage: `url(${habilidad.imagen})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          backgroundColor: 'white', 
        }}/>
              <p>{habilidad.lenguaje}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <br /> */}
      <div className="cuadrado-grande">
        <h3>Experiencia:</h3>
        <div className="tabla-experiencia">
          <ul className="experiencia">
          <li className="encabezado">
              <span className="trabajo">Serinza Solutions SL (2023/2024)</span>{" "}
              <span className="centro">Consultor tecnológico</span>
              <ul>
                <li>Orientación experta sobre soluciones y estrategias tecnológicas.</li>
                <li>Desarrollador de diseño, implementación y mantenimiento de software y aplicaciones.</li>
              </ul>
            </li>
            <li className="encabezado">
              <span className="trabajo">Decathlon España (2019/2021)</span>{" "}
              <span className="centro">Técnico Informatico</span>
              <ul>
                <li>Web Tester</li>
                <li>Mantenimiento Informático</li>
              </ul>
            </li>
            <li className="encabezado">
              <span className="trabajo">Carrefour (2018/2019)</span>{" "}
              <span className="centro">
                Vendedor especializado en Informática
              </span>
              <ul>
                <li>Vendedor especializado en Informática</li>
              </ul>
            </li>

            <li className="encabezado">
              <span className="trabajo">Decathlon España (2018/2019)</span>{" "}
              <span className="centro">Técnico Informatico</span>
              <ul>
                <li>Web Tester</li>
                <li>Mantenimiento Informático</li>
              </ul>
            </li>
            <li className="encabezado">
              <span className="trabajo">Zener Plus SL (2017)</span>{" "}
              <span className="centro">Instalador de Redes Informáticas</span>
              <ul>
                <li>Instalación de puntos de acceso 4G en viviendas</li>
                <li>
                  Instalación de redes en centros de educación, para el proyecto
                  Escuelas Conectadas en Galicia
                </li>
                <li>Instalador de Redes Informáticas</li>
              </ul>
            </li>
            <li className="encabezado">
              <span className="trabajo">Serinza Solution SL (2017)</span>{" "}
              <span className="centro">Desarrollador Web</span>
              <ul>
                <li>
                  Desarrollo de proyectos de digitalización e integración de
                  sistemas, accesibilidad web en administraciones públicas
                </li>
                <li>
                  Desarrollo y Mantenimiento evolutivo de portales web y
                  plataformas ecommerce
                </li>
                <li>Administración de portales web, CMS</li>
              </ul>
            </li>

            <li className="encabezado">
              <span className="trabajo">Bits & Company (2014)</span>{" "}
              <span className="centro">Soporte Informatico</span>
              <ul>
                <li>
                  Reparación y mantenimiento de equipos y servidores
                  informáticos
                </li>
                <li>Soporte Informatico</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
