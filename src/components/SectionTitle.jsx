import React from "react";
function SectionTitle({ count,children }) {
  return (
    <h1 className="section-title">
      <span className="count">{count}. </span>
      {children}
    </h1>
  );
}

export default SectionTitle;
