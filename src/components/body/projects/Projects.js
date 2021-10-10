import React from "react";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/Separator";
import ProjectCard from "./ProjectCard";
import "./projects.css";

export default function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}
