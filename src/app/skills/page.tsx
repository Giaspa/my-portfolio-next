import { SkillByGroup, SKILLS_N_PATH_BY_GROUP } from "@/types/skill.model";
import Header from "../ui/header";
import Hero from "../ui/hero";
import Image from "next/image";

export default function Skills() {
  const skillGroup: SkillByGroup[] = SKILLS_N_PATH_BY_GROUP;

  return (
    <Hero imagePath="assets/img/Skills.png">
      <Header white="My" blue="Skills" />

      <section className="flex flex-col lg:flex-row flex-wrap gap-4 flex-1 lg:max-h-[calc(100vh-16rem-3rem)] lg:overflow-y-auto">
        {skillGroup.map((group) => (
          <article className="glass p-4 flex-1" key={group.group}>
            <p className="font-mono font-semibold border-b w-full block mb-2">
              {group.group || "Others..."}
            </p>

            <ul className="flex flex-col flex-wrap gap-y-1 gap-x-4 text-lg">
              {group.skills.map((item) => (
                <li key={item.skill}
                  className="flex flex-row gap-2 items-center flex-1"
                  title={item.skill}
                >
                  {item.path && (
                    <span className="w-4">
                      <Image src={item.path} alt={item.skill} className="h-4" width={16} height={16} />
                    </span>
                  )}

                  {item.skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </Hero>
  );
}
