import { Project } from "@/types/project.model";
import Image from "next/image";
import { useContext } from "react";
import { ProjectsContext } from "./projects-context";
import { useRouter } from "next/navigation";

export type ProjectProps = {
  project: Project;
};

export default function ProjectButton({ project }: Readonly<ProjectProps>) {
  const router = useRouter();
  const { svgs, setProject } = useContext(ProjectsContext);

  function handleOpenProject() {
    setProject(project);
    router.push(`/projects#${project.id}`);
  }

  return (
    <button
      className="h-fit glass px-4 py-2 flex flex-col items-center hover:scale-105 w-full lg:w-64 group text-stone-300"
      onClick={handleOpenProject}
    >
      <p className="font-mono uppercase text-lg truncate w-[calc(16rem-2rem)]">
        {project.name}
      </p>

      <div className="divider m-0 before:bg-stone-300 after:bg-stone-300"></div>

      <section className="flex flex-row gap-3 grayscale-[90%] group-hover:grayscale-0 ">
        {project.stack.map((tech) => (
          <Image
            key={`project-${project.id}-${tech}`}
            src={svgs[tech.toLowerCase()]}
            alt={tech}
            title={tech}
            className="h-5"
            width={20}
            height={20}
          />
        ))}
      </section>
    </button>
  );
}
