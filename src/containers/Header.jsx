import React from "react";
import Navbar from "../components/Navbar";

const Header = (props) => {
  const resume =
    props.personalInfo.length > 0 ? props.personalInfo[0].resume : "";
  return (
    <>
      <Navbar resume={resume} />
      {props.personalInfo.map((info) => (
        <div key={info.id} className="header container">
          <p className="header-sub-title">Hi, my name is</p>
          <h2 className="header-name">{info.name + " " + info.surName}.</h2>
          <h3 className="header-specialty">I am {info.profession}.</h3>
          <p className="header-text">{info.description}</p>
        </div>
      ))}
    </>
  );
};

export default Header;
