import React from "react";
import SectionTitle from "../components/SectionTitle";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <SectionTitle count="04">Contact</SectionTitle>
      <div className="about-me">
        <h1 className="about-me-title">Contact me</h1>
        <p className="about-me-description">
          I am currently looking for new opportunities, the box of visitors is
          always open. If you have any questions, you can contact me. I will do
          my best to answer you!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
