import { About } from "@/types/about.model";

type AboutSectionFromDB = {
  sectionKey: string;
  text: string;
  order: number;
};

export function transformAboutSections(sections: AboutSectionFromDB[]): About {
  const result: About = {
    a_who: [],
    b_when: [],
    c_so: [],
    d_learn: [],
    e_and: [],
  };

  // Ordina per sectionKey e order, poi raggruppa per sectionKey
  const sortedSections = sections.sort((a, b) => {
    if (a.sectionKey !== b.sectionKey) {
      return a.sectionKey.localeCompare(b.sectionKey);
    }
    return a.order - b.order;
  });

  sortedSections.forEach((section) => {
    const key = section.sectionKey as keyof About;
    if (result[key]) {
      result[key].push(section.text);
    }
  });

  return result;
}


