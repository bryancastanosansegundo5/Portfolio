import React from "react";
import "../../styles/proyectos.css";
const importImagenes = (r) => {
  let images = {};

  r.keys().forEach((key) => {
    images[key] = r(key);
  });
  return images;
};

const imagen = importImagenes(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);
const proyectosArray = [
  {
    enlace: "https://paises-teal.vercel.app",
    image: imagen["./paisesReact.png"],
    github: "https://github.com/bryancastanosansegundo5/Paises",
    titulo: "Paises del Mundo",
    descripcion:
      "Paises obtenidos de una API, en los cuales podemos ver diferentes datos ",
    iconos: [
      <i class="fab fa-react"></i>,
      <i class="fab fa-js-square"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
  {
    enlace: "https://hexa-color.vercel.app",
    image: imagen["./coloresReact.png"],
    github: " https://github.com/bryancastanosansegundo5/HexaColor",
    titulo: "Colores Hexadecimales",
    descripcion: "Colores hexadecimales generados al azar",
    iconos: [
      <i class="fab fa-react"></i>,
      <i class="fab fa-js-square"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
  {
    enlace: "https://paises-js.vercel.app",
    image: imagen["./paisesJS.png"],
    github: "https://github.com/bryancastanosansegundo5/PaisesJS",
    titulo: "Países del Mundo en JS",
    descripcion: "Buscador de nombres de Países",
    iconos: [
      <i class="fab fa-js-square"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
  {
    enlace: "https://numeros-primos-psi.vercel.app",
    image: imagen["./numerosPrimos.png"],
    github: "https://github.com/bryancastanosansegundo5/NumerosPrimos",
    titulo: "Números Primos",
    descripcion: "Indicador de números, hasta el que tu le indiques ",
    iconos: [
      <i class="fab fa-js-square"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
  {
    enlace: "https://pelotas-jade.vercel.app",
    image: imagen["./pelotas.png"],
    github: "https://github.com/bryancastanosansegundo5/Pelotas",
    titulo: "Pelotas saltarinas",
    descripcion:
      "Pelotas que rebotan cuando encuentran otras y contra las paredes",
    iconos: [
      <i class="fab fa-js-square"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
  {
    enlace: "https://crud-php-henna.vercel.app",
    image: imagen["./crudUsuarios.png"],
    github: "https://github.com/bryancastanosansegundo5/CrudPHP",
    titulo: "CRUD de usuarios",
    descripcion:
      "CRUD de Usuarios en PHP",
    iconos: [
      <i class="fab fa-php"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
  // <i class="fa-brands fa-php"></i>
  {
    enlace: "https://portfolio-beta-seven-28.vercel.app",
    image: imagen["./portfolioReact.png"],
    github: "https://github.com/bryancastanosansegundo5/Portfolio",
    titulo: "Mí Portfolio",
    descripcion: "Mí portfolio",
    iconos: [
      <i class="fab fa-react"></i>,
      <i class="fab fa-js-square"></i>,
      <i class="fab fa-css3-alt"></i>,
      <i class="fab fa-html5"></i>,
    ],
  },
];
const Proyectos = (props) => {
  return (
    <div className="proyectos swing-in-left-fwd">
      <h2 className="titulo">Proyectos Realizados</h2>

      <div className="tarjetas">
        {proyectosArray.map((item, index) => (
          <div className="tarjeta">
            <div className="enlace-proyecto">
              <a href={item.enlace} target="_blank" rel="noreferrer">
                <img
                  src={item.image}
                  alt={`Imagen ${index}`}
                  className="imagen-tarjeta"
                />
              </a>
            </div>
            <div className="contenido-tarjeta">
              <div className="descripcion-tarjeta">
                <h3>{item.titulo}</h3>

                <p>{item.descripcion}</p>
              </div>
              <div className="lenguajes-utilizados">
                <p>
                  Lenguajes utilizados:
                  <br /> {item.iconos}
                </p>
              </div>
              <div className="lenguajes"></div>
            </div>
            <div className="pie-tarjeta">
              <a
                href={item.github}
                target="_blank"
                className="enlace-github"
                rel="noreferrer"
              >
                <span className="texto-enlace"></span>Code{" "}
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;

