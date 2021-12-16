import React from "react";

const Button = ({ children, href }) => {
  return (
    <a className="btn btn-green" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Button;
