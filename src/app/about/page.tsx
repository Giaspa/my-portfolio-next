import { Experience as Exp } from "@/types/experience.model";
import Experience from "./experience";
import Image from "next/image";
import Header from "../ui/header";
import Hero from "../ui/hero";
import AssertItem from "./assert-item";
import AssertItemProvider from "./assert-context";
import { prisma } from "../../../prisma/db";

export default async function About() {
  const experiences = await prisma.experience.findMany() as unknown as Exp[];

  return (
    <Hero imagePath="assets/img/About.png">
      <Header white="Gianluca" blue="Spadazzi" />

      <div className="flex flex-col lg:flex-row gap-8">
        <section className="flex-1 lg:overflow-y-auto lg:max-h-[calc(100vh-16rem-3rem)] relative">
          <Image
            src="/assets/img/Me_blue.png"
            alt="This is me!"
            className="h-60 mr-4 opacity-70 place-self-center lg:place-content-start float-none lg:float-left rounded-xl"
            width={240}
            height={240}
          />

          <div className="">
            <AssertItemProvider>
              <AssertItem />
            </AssertItemProvider>
          </div>
        </section>

        <section className="flex-1 flex flex-col gap-2 lg:overflow-y-auto lg:max-h-[calc(100vh-16rem-3rem)] lg:pr-4">
          {experiences.sort((a, b) => a.id - b.id).map((exp) => (
            <Experience experience={exp} key={`work-experience-${exp.id}`} />
          ))}
        </section>
      </div>
    </Hero>
  );
}
