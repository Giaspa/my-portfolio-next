"use client";

import { MOCK_ABOUT } from "@/types/about.model";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef } from "react";
import { AssertContext } from "./assert-context";

export default function AssertItem() {
  const { setTab, getCurrKey, getNextKey } = useContext(AssertContext);
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const activeKeys = getCurrKey();
  const nextKey = getNextKey();

  const messages = activeKeys.map((key, index) => {
    console.log("🚀 ~ messages ~ key:", key, index);
    switch (index) {
      case 4:
        return "Let's just connect!";
      case 3:
        return "Seriously? Ok... more!";
      case 2:
        return "How curious! Fine, more...";
      default:
        return "More...";
    }
  });

  function showNext() {
    if (nextKey) {
      setTab(nextKey);
    } else {
      router.push("/contacts");
    }
  }

  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeKeys]);

  return (
    <div>
      {activeKeys.map((key, index, array) => (
        <div key={key}>
          <p className="font-mono text-lg flex flex-col text-pretty py-2">
            {MOCK_ABOUT[key]?.map((assert, idx) => (
              <span key={`assert-item-${key}-${idx}`}>{assert}</span>
            ))}
          </p>

          {index === array.length - 1 && (
            <button
              ref={btnRef}
              onClick={showNext}
              className="btn glass text-stone-300 mt-4"
            >
              {messages[index]}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
