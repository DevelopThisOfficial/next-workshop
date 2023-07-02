import { projects } from "@/data/projectsData";
import React from "react";

function Projects() {
  return (
    <>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.link}>Link</a>
          </div>
        );
      })}
    </>
  );
}

export default Projects;
