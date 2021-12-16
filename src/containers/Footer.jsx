import React from "react";
import SosialIcons from "../components/SosialIcons";

const Footer = () => {
  return (
    <section className="footer">
      <SosialIcons positon={false} />
      <p className="copyright">Designed by Ali Gulmalıyev</p>
    </section>
  );
};

export default Footer;
