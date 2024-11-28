import React from "react";

const Footer = ({ date }) => {
  date = new Date();
  return (
    <footer>
      <p>
        Derechos de autor &copy; {date.getFullYear()} Bryan Castaño San Segundo
      </p>
    </footer>
  );
};
export default Footer;
