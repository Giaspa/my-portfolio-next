"use client";

import { About } from "@/types/about.model";
import { Context, createContext, useReducer } from "react";

const DEFAULT_SHOW_TABS: Record<keyof About, boolean> = {
  a_who: true,
  b_when: false,
  c_so: false,
  d_learn: false,
  e_and: false,
};

export type AssertContextType = {
  showTabs: Record<keyof About, boolean>;
  setTab: (tabKey: keyof About) => void;
  getCurrKey: () => (keyof About)[];
  getNextKey: () => keyof About | null;
};
type AssertType = {
  showTabs: Record<keyof About, boolean>;
};
enum ActionType {
  EDIT = "EDIT",
};
type ProviderActionType = {
  type: ActionType;
  payload: {
    tabKey: keyof About;
  };
};
type AssertProviderProps = {
  children: React.ReactNode;
};

export const AssertContext: Context<AssertContextType> = createContext({
  showTabs: DEFAULT_SHOW_TABS,
  setTab: (tabKey: keyof About) => {
    console.log(tabKey);
  },
  getCurrKey: () => {},
  getNextKey: () => {},
} as AssertContextType);

function AssertItemReducer(state: AssertType, action: ProviderActionType): AssertType {
  if (action.type === ActionType.EDIT) {
    return {
      ...state,
      showTabs: {
        ...state.showTabs,
        [action.payload.tabKey]: true,
      },
    };
  }

  return state;
}

const initialState = {
  showTabs: DEFAULT_SHOW_TABS,
};

export default function AssertItemProvider({ children }: AssertProviderProps) {
  const [state, dispatch] = useReducer(AssertItemReducer, initialState);

  function handleUpdateTab(tabKey: keyof About) {
    dispatch({
      type: ActionType.EDIT,
      payload: {
        tabKey,
      },
    } as ProviderActionType);
  }

  function handleGetNextKey(): keyof About | null {
    const lastTab = Object.entries(state.showTabs)
      .map((newObj) => {
        return { key: newObj[0], value: newObj[1] };
      })
      .filter((x) => !x.value)[0];

    return lastTab ? (lastTab.key as keyof About) : null;
  }

  function handleGetActiveKeys(): (keyof About)[] {
    return Object.entries(state.showTabs)
      .filter(([, value]) => value)
      .map(([key]) => key as keyof About);
  }

  const ctxValue: AssertContextType = {
    showTabs: state.showTabs,
    setTab: handleUpdateTab,
    getCurrKey: handleGetActiveKeys,
    getNextKey: handleGetNextKey,
  };

  return (
    <AssertContext.Provider value={ctxValue}>{children}</AssertContext.Provider>
  );
}
