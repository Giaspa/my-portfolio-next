"use client";

import Header from "../ui/header";
import Hero from "../ui/hero";
import ProjectButton from "./project-button";
import ProjectCarousel from "./project-carousel";
import { useContext, useEffect } from "react";
import ProjectsProvider, { ProjectsContext } from "./projects-context";

export default function Skills() {
  return (
    <ProjectsProvider>
      <SkillsContent/>
    </ProjectsProvider>
  );
}

function SkillsContent() {
  const { project, projects } = useContext(ProjectsContext);

  useEffect(() => {
    console.log("USE EFFECT");
  }, [project]);

  return (
    <Hero imagePath="assets/img/Projects.png">
      <Header white="My" blue="Projecs" />

      {project ? (
        <ProjectCarousel />
      ) : (
        <section className="flex-grow flex flex-col content-start lg:flex-row lg:flex-wrap gap-8 lg:justify-center lg:max-h-[calc(100vh-16rem-3rem)] lg:overflow-y-auto">
          {projects.map((project) => (
            <ProjectButton key={project.id} project={project} />
          ))}
        </section>
      )}
    </Hero>
  );
}
