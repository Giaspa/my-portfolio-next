import CarouselItem from "./carousel-item";
import { useContext } from "react";
import { ProjectsContext } from "./projects-context";
import { useRouter } from "next/navigation";

export default function ProjectCarousel() {
  const router = useRouter();
  const { projects, setProject } = useContext(ProjectsContext);

  function handleClose() {
    setProject();
    router.push(`/projects`);
  }

  return (
    <section className="h-full lg:h-fit">
      <button
        onClick={handleClose}
        className="float-right lg:hidden btn btn-circle border-transparent bg-transparent hover:border-transparent hover:bg-transparent hover:scale-95 text-stone-300"
      >
        <i className="fa-solid fa-xmark fa-2xl"></i>
      </button>

      <div className="carousel w-full gap-4 h-full lg:h-fit">
        {projects.map((project) => (
          <CarouselItem
            key={`carousel-item-${project.id}`}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
