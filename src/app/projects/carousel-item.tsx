import Image from "next/image";
import { useContext } from "react";
import { ProjectsContext } from "./projects-context";
import { useRouter } from "next/navigation";
import { ProjectProps } from "./project-button";

export default function CarouselItem({ project }: Readonly<ProjectProps>) {
  const router = useRouter();
  const { svgs, setProject, goBack, goAhead } = useContext(ProjectsContext);

  function handleClose() {
    setProject();
    router.push(`/projects`);
  }

  return (
    <div id={project.id} className="carousel-item relative w-full">
      <img
        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
        alt="Cover"
        className="w-full h-full relative opacity-0"
      />

      <article className="w-full absolute top-0 p-4 lg:py-12 lg:px-24 h-fit lg:h-full glass flex flex-col gap-4">
        <p className="flex flex-col">
          <span className="text-2xl font-mono uppercase font-semibold">
            {project.name}
          </span>
          <span className="flex flex-col lg:flex-row text-sm font-mono text-stone-300 lg:gap-4">
            <span>
              {project.dateFrom}
              {project.dateTo ? " | " + project.dateTo : null}
            </span>
            <span className="hidden lg:block">·</span>
            <span>{project.role}</span>
            <span className="hidden lg:block">·</span>
            <span>Team size: {project.teamSize}</span>
          </span>
        </p>

        <div className="flex flex-col lg:flex-row flex-1 gap-4 lg:gap-0">
          <p className="flex-1 order-3 lg:order-1">{project.description}</p>

          <section className="divider lg:divider-horizontal before:bg-stone-300 after:bg-stone-300 opacity-50 order-1 lg:order-2 m-0"></section>

          <section className="lg:w-1/5 flex flex-col justify-between font-mono order-2 lg:order-3 gap-8 lg:gap-0">
            <div>
              <p>Tech stack:</p>
              <figure className="mt-1 flex flex-row gap-4 flex-wrap justify-center lg:justify-start">
                {project.stack.map((tech) => (
                  <Image
                    key={`carousel-item-${project.id}-${tech}`}
                    src={svgs[tech.toLowerCase()]}
                    alt={tech}
                    title={tech}
                    className="h-8"
                    width={32}
                    height={32}
                  />
                ))}
              </figure>
            </div>

            <div className="flex flex-row lg:flex-col gap-2 justify-between lg:justify-start">
              {project.link ? (
                <p className="flex flex-row items-baseline group">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener"
                    className="group-hover:animate-pulse w-24"
                  >
                    <i className="fa-solid fa-link mr-2 w-5"></i>

                    <span className="underline underline-offset-2">Link</span>
                  </a>

                  <i className="fa-solid fa-check text-green-600 ml-4"></i>
                </p>
              ) : (
                <p className="flex flex-row items-baseline group">
                  <span className="w-24 opacity-50">
                    <i className="fa-solid fa-link mr-2 w-5"></i>

                    <span>Link</span>
                  </span>

                  <i className="fa-solid fa-xmark text-red-600 ml-4"></i>
                </p>
              )}

              {project.github ? (
                <p className="flex flex-row items-baseline group">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener"
                    className="group-hover:animate-pulse w-24"
                  >
                    <i className="fa-brands fa-github mr-2 w-5"></i>

                    <span className="underline underline-offset-2">Github</span>
                  </a>

                  <i className="fa-solid fa-check text-green-600 ml-4"></i>
                </p>
              ) : (
                <p className="flex flex-row items-baseline group">
                  <span className="w-24 opacity-50">
                    <i className="fa-brands fa-github mr-2 w-5"></i>

                    <span>Github</span>
                  </span>

                  <i className="fa-solid fa-xmark text-red-600 ml-4"></i>
                </p>
              )}
            </div>
          </section>
        </div>
      </article>

      <div className="hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 transform justify-between">
        <button
          onClick={() => goBack()}
          className="btn btn-circle bg-neutral-content hover:bg-neutral-content hover:scale-95 text-black"
        >
          <i className="fa-solid fa-caret-left fa-2xl"></i>
        </button>
      </div>

      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 transform justify-between">
        <button
          onClick={() => goAhead()}
          className="btn btn-circle bg-neutral-content hover:bg-neutral-content hover:scale-95 text-black"
        >
          <i className="fa-solid fa-caret-right fa-2xl"></i>
        </button>
      </div>

      <div className="hidden lg:flex absolute right-0 top-0 -translate-y-0 transform justify-between">
        <button
          onClick={handleClose}
          className="btn btn-circle border-transparent bg-transparent hover:border-transparent hover:bg-transparent hover:scale-95 text-stone-300"
        >
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
      </div>
    </div>
  );
}
