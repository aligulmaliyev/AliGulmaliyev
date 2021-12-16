import React from "react";

const EmailLink = ({ email }) => {
  return (
    <div className="email">
      <a
        rel="noreferrer"
        className="email-link"
        target="_blank"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
};

export default EmailLink;
