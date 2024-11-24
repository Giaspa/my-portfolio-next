import { SVG_MAP } from "./svg.model";

export type Skill = {
  name: string,
  type: string | null
};

export type SkillAndPath = {
  skill: string,
  type: string | null,
  path: string | null,
};

export type SkillByGroup = {
  group: string,
  skills: SkillAndPath[]
}

export const MOCK_SKILLS: Skill[] = [
  { name: "Java", type: "Languages" },
  { name: "HTML", type: "Languages" },
  { name: "CSS", type: "Languages" },
  { name: "Javascript", type: "Languages" },
  { name: "TypeScript", type: "Languages" },
  { name: "Angular", type: "Frameworks & Libraries" },
  { name: "React.js", type: "Frameworks & Libraries" },
  { name: "Vue.js", type: "Frameworks & Libraries" },
  { name: "Next.js", type: "Frameworks & Libraries" },
  { name: "Svelte", type: "Frameworks & Libraries" },
  { name: "React Native", type: "Frameworks & Libraries" },
  { name: "Flutter", type: "Frameworks & Libraries" },
  { name: "Spring", type: "Frameworks & Libraries" },
  { name: "Redux", type: "Frameworks & Libraries" },
  { name: "Sass", type: "Style & Design" },
  { name: "Tailwind", type: "Style & Design" },
  { name: "Bootstrap", type: "Style & Design" },
  { name: "DaisyUI", type: "Style & Design" },
  { name: "PandaCSS", type: "Style & Design" },
  { name: "Figma", type: "Style & Design" },
  { name: "Miro", type: "Style & Design" },
  { name: "MongoDB", type: "Database & ORMs" },
  { name: "Prisma", type: "Database & ORMs" },
  { name: "MyBatis", type: "Database & ORMs" },
  { name: "Hibernate", type: "Database & ORMs" },
  { name: "MySql", type: "Database & ORMs" },
  { name: "Supabase", type: "Database & ORMs" },
  { name: "Git", type: "Repositories" },
  { name: "GitHub", type: "Repositories" },
  { name: "GitLab", type: "Repositories" },
  { name: "SonarCloud", type: null },
  { name: "Vite", type: null },
  { name: "Docker", type: null },
  { name: "Google GTM", type: null },
  { name: "Jira", type: null },
  { name: "Trello", type: null },
  { name: "Postman", type: null },
  { name: "Firebase", type: null },
  { name: "Vercel", type: null },
  { name: "GithubPages", type: null },
]

export function findSvg(skill: string): string {
  const KEY = skill.split(".")[0].split(" ")[0].toLowerCase();
  const SVG_PATH = SVG_MAP[KEY];

  if (SVG_PATH) return SVG_PATH;

  return "";
}

export const SKILLS_N_PATH: SkillAndPath[] = MOCK_SKILLS.map(skill => {
  const path: string | null = findSvg(skill.name) && findSvg(skill.name) != "" ? findSvg(skill.name) : null;

  return {
    skill: skill.name,
    type: skill.type,
    path: path,
  }
})

export const SKILLS_N_PATH_BY_GROUP: SkillByGroup[] = [...new Set(SKILLS_N_PATH.map(item => item.type))].map(group => {
  return {
    group: group!,
    skills: SKILLS_N_PATH.filter(skill => skill.type === group)
  }
})
