import React, { Fragment, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const Projects = () => {
  const [toggle, setToggle] = useState(false);
  const [projects, setProject] = useState([]);

  const handleToglle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const getAboutMe = async () => {
      const response = await fetch(
        "https://aligulmaliyev-c908d-default-rtdb.firebaseio.com/projects.json"
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const responseData = await response.json();
      const allProject = [];
      for (const key in responseData) {
        allProject.push(responseData[key]);
      }
      setProject(allProject);
    };
    getAboutMe();
  }, []);

  const showProjectCount = toggle ? projects.length : 6;
  return (
    <section id="projects" className="container">
      <SectionTitle count="03">Projects</SectionTitle>
      <div className="projects">
        <div className="projects-cards">
          {projects.map((projectList, index) => (
            <Fragment key={index}>
              {projectList
                .reverse()
                .slice(0, showProjectCount)
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </Fragment>
          ))}
        </div>
        {projects.length <= 6 ? (
          ""
        ) : (
          <Button onClick={handleToglle}>
            {toggle ? "Show Less" : "Show More"}
          </Button>
        )}
      </div>
    </section>
  );
};

export default Projects;
