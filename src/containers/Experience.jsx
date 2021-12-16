import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Tabs from "../components/Tabs";
const Experience = () => {
  const [experience, setExperience] = useState([]);
  useEffect(() => {
    const getExperience = async () => {
      const response = await fetch(
        "https://aligulmaliyev-c908d-default-rtdb.firebaseio.com/experience.json"
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const responseData = await response.json();
      const experience = [];
      for (const key in responseData) {
        experience.push({
          id: key,
          experience: responseData[key],
        });
      }
      setExperience(experience);
    };
    getExperience();
  }, []);

  return (
    <section id="jobs" className="container">
      <SectionTitle count="02">Where I’ve Worked</SectionTitle>
      <Tabs experienceData={experience} />
    </section>
  );
};

export default Experience;
