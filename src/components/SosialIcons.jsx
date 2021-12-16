import React, { useState, useEffect, Fragment } from "react";
import { socialMedia } from "../config";

const SosialIcons = ({ positon }) => {
  const isVertical = positon ? "vertical" : "horizontal";
  const [sosialLink, setProject] = useState([]);

  useEffect(() => {
    const getAboutMe = async () => {
      const response = await fetch(
        "https://aligulmaliyev-c908d-default-rtdb.firebaseio.com/sosial-links.json"
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const responseData = await response.json();
      const allSosialLink = [];
      for (const key in responseData) {
        allSosialLink.push({
          id: key,
          sosialLink: responseData[key],
        });
      }
      setProject(allSosialLink);
    };
    getAboutMe();
  }, []);
  return (
    <div className={`sosial ${isVertical}`}>
      {sosialLink.map((sosialLinks) => (
        <Fragment key={sosialLinks.id}>
          {sosialLinks.sosialLink.map((sosial, index) => (
            <a
              key={index}
              className="sosial-link"
              target="_blank"
              href={sosial.url}
            >
              <i className={sosial.icon}></i>
            </a>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default SosialIcons;
