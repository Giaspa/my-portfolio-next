"use client";

import { MOCK_PROJECTS, Project } from "@/types/project.model";
import { SVG_MAP } from "@/types/svg.model";
import { useRouter } from "next/navigation";
import { Context, createContext, useReducer } from "react";

const PROJECTS: Project[] = MOCK_PROJECTS;
const SVGS: { [k: string]: string } = SVG_MAP;
export type ProjectContextType = {
  project: Project | null;
  projects: Project[];
  svgs: { [k: string]: string };
  setProject: (project?: Project) => void;
  goBack: () => void;
  goAhead: () => void;
  getNextId: () => string;
  getPrevId: () => string;
};
type ProjectType = {
  project: Project | null;
};
enum ActionType {
  EDIT = "EDIT",
}
type ProviderActionType = {
  type: ActionType;
  payload: { project: Project | null };
};
type ProjectProviderProps = {
  children: React.ReactNode;
};

export const ProjectsContext: Context<ProjectContextType> = createContext({
  project: null,
  projects: PROJECTS,
  svgs: SVGS,
  setProject: (project?: Project) => {
    console.log(project);
  },
  goBack: () => {},
  goAhead: () => {},
  getNextId: () => {},
  getPrevId: () => {},
} as ProjectContextType);

function ProjectsReducer(
  state: ProjectType,
  action: ProviderActionType
): ProjectType {
  if (action.type === ActionType.EDIT) {
    if (action.payload.project) {
      return { ...state, project: action.payload.project };
    }
    return { ...state, project: null };
  }
  return state;
}

const initialState = {
  project: null,
};

export default function ProjectsProvider({ children }: Readonly<ProjectProviderProps>) {
  const [state, dispatch] = useReducer(ProjectsReducer, initialState);
  const router = useRouter();

  const lastProjectsIndex = PROJECTS.length - 1;

  function handleSetProject(project?: Project) {
    dispatch({
      type: ActionType.EDIT,
      payload: {
        project,
      },
    } as ProviderActionType);
  }

  function handleGoBack() {
    let project;

    if (state.project) {
      const $index = PROJECTS.map((pr) => pr.id).indexOf(state.project?.id);

      if ($index === 0) {
        project = PROJECTS[lastProjectsIndex];
      } else {
        project = PROJECTS[$index - 1];
      }

      handleSetProject(project);

      router.push(`/projects#${project.id}`);
    } else {
      handleSetProject();
      router.push(`/projects`);
    }
  }

  function handleGoAhead() {
    let project;

    if (state.project) {
      const $index = PROJECTS.map((pr) => pr.id).indexOf(state.project?.id);

      if ($index === lastProjectsIndex) {
        project = PROJECTS[0];
      } else {
        project = PROJECTS[$index + 1];
      }

      handleSetProject(project);

      router.push(`/projects#${project.id}`);
    } else {
      handleSetProject();
      router.push(`/projects`);
    }
  }

  function handleGetNextId() {
    let project;

    if (state.project) {
      const $index = PROJECTS.map((pr) => pr.id).indexOf(state.project?.id);

      if ($index === lastProjectsIndex) {
        project = PROJECTS[0];
      } else {
        project = PROJECTS[$index + 1];
      }

      return project.id;
    }
    return PROJECTS[0].id;
  }

  function handleGetPrevId() {
    let project;

    if (state.project) {
      const $index = PROJECTS.map((pr) => pr.id).indexOf(state.project?.id);

      if ($index === 0) {
        project = PROJECTS[lastProjectsIndex];
      } else {
        project = PROJECTS[$index - 1];
      }

      return project.id;
    } 
    
    return PROJECTS[0].id;
  }

  const ctxValue: ProjectContextType = {
    project: state.project,
    projects: PROJECTS,
    svgs: SVGS,
    setProject: handleSetProject,
    goBack: handleGoBack,
    goAhead: handleGoAhead,
    getNextId: handleGetNextId,
    getPrevId: handleGetPrevId,
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}
