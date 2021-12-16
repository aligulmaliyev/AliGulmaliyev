import React, { Fragment, useState } from "react";

const Tabs = ({ experienceData }) => {
  const [toggleTab, setToggleTab] = useState(1);
  return (
    <div className="tab">
      <ul className="tab-list">
        {experienceData.map((experience) => (
          <Fragment key={experience.id}>
            {experience.experience.map((item) => (
              <li
                key={item.id}
                className={`tab-list-item ${
                  toggleTab === item.id ? "active-tab" : ""
                }`}
                onClick={() => setToggleTab(item.id)}
              >
                {item.companyName}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <div className="tab-contents">
        {experienceData.map((experience) => (
          <Fragment key={experience.id}>
            {experience.experience.map((item) => (
              <div
                key={item.id}
                className={`content ${toggleTab === item.id ? "active" : ""}`}
              >
                <h3 className="title">
                  <span className="position">{item.position}</span>
                  <span className="compant-name">
                    @
                    <a href={item.companyLink} target="_blank" rel="noreferrer">
                      {item.companyName}
                    </a>
                  </span>
                </h3>
                <p className="date">{item.date}</p>
                <ul className="responsibilities">
                  {item.responsibilities.map((responsibilities,index) => (
                    <li key={index}>
                      <i className="fas fa-caret-right"></i>
                      {responsibilities}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
