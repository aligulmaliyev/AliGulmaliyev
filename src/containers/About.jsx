import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";

const About = ({ profileImg }) => {
  const [aboutMe, setAboutMe] = useState([]);
  useEffect(() => {
    const getAboutMe = async () => {
      const response = await fetch(
        "https://aligulmaliyev-c908d-default-rtdb.firebaseio.com/about.json"
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const responseData = await response.json();
      const aboutInfo = [];
      for (const key in responseData) {
        aboutInfo.push({
          id: key,
          aboutList: responseData[key].aboutList,
          skills: responseData[key]["skillsList"].skills,
          title: responseData[key]["skillsList"].title,
        });
      }
      setAboutMe(aboutInfo);
    };
    getAboutMe();
  }, []);
  return (
    <section id="about" className="about container">
      <SectionTitle count="01">About Me</SectionTitle>
      {aboutMe.map((info) => (
        <div key={info.id} className="about-content">
          <div className="about-left">
            {info.aboutList.map((listItem, index) => (
              <p key={index}>{listItem}</p>
            ))}
            <p>{info.title}</p>
            <ul className="about-left-skills">
              {info.skills.map((skill, index) => (
                <li key={index}>
                  <i className="fas fa-caret-right"></i> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-right">
            <img src={profileImg} alt="profile" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
