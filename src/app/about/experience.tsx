import { Experience as Exp } from "@/types/experience.model";

type ExperienceProps = {
  experience: Exp;
};

export default function Experience({ experience }: ExperienceProps) {
  return (
    <article className="collapse collapse-arrow glass">
      <input
        type="radio"
        name="my-experiences"
      />
      <p className="text-md flex flex-col collapse-title">
        <span className="flex flex-col lg:flex-row flex-1 justify-between">
          <span className="uppercase font-bold text-lg order-2 lg:order-1">
            {experience.what}
          </span>

          <span className="order-1 lg:order-2">
            {experience.whenFrom} - {experience.whentTo}
          </span>
        </span>
        <span className="font-semibold font-mono"> {experience.where}</span>
      </p>

      <p className="collapse-content">{experience.description}</p>
    </article>
  );
}
