"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import SlimItem from "./slim-item";
import FrameworkItem from "./framework-item";
import Image from "next/image";

export default function NavbarSlim() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function handleNavigate(point: "about" | "projects" | "skills" | "contacts") {
    router.push(`/${point}`);
    closeDropdown();
  }

  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  function toggleDropdown() {
    setIsDropdownOpen((prevState) => !prevState);
  }

  return (
    <>
      {isDropdownOpen && (
        <div
          className="absolute top-0 left-0 bg-transparent h-screen w-screen"
          onClick={closeDropdown}
        ></div>
      )}

      <div className="dropdown lg:hidden absolute top-4 left-4 z-50">
        <button
          onClick={toggleDropdown}
          className="btn text-stone-300 glass rounded-full"
        >
          {isDropdownOpen ? (
            <i className="fa-solid fa-xmark  fa-xl"></i>
          ) : (
            <i className="fa-solid fa-bars fa-xl"></i>
          )}
        </button>

        <ul
          className={`z-20 mt-3 w-52 p-2 shadow rounded-sm glass ${
            isDropdownOpen ? "flex flex-col gap-4" : "hidden"
          }`}
        >
          <li>
            <SlimItem
              point="about"
              onNavigate={(event) => handleNavigate(event)}
              isActive={pathname === `/about`}
            />
          </li>
          <li>
            <SlimItem
              point="projects"
              onNavigate={(event) => handleNavigate(event)}
              isActive={pathname === `/projects`}
            />
          </li>
          <li>
            <SlimItem
              point="skills"
              onNavigate={(event) => handleNavigate(event)}
              isActive={pathname === `/skills`}
            />
          </li>
          <li>
            <SlimItem
              point="contacts"
              onNavigate={(event) => handleNavigate(event)}
              isActive={pathname === `/contacts`}
            />
          </li>
          <li className="h-8">
            <a></a>
          </li>
          <li>
            <a>Show in:</a>
            
            <ul className="p-2 flex flex-col gap-4">
              <FrameworkItem
                title="Angular"
                link="https://giaspa.github.io/my-portfolio-angular"
              >
                <Image
                  src="/assets/svg/angular.svg"
                  alt="Angular"
                  width={20}
                  height={20}
                />
              </FrameworkItem>

              <FrameworkItem title="React">
                <Image
                  src="/assets/svg/react.svg"
                  alt="React"
                  className="h-5"
                  width={20}
                  height={20}
                />
              </FrameworkItem>

              {/* <FrameworkItem disabled={false} title="Vue.js" link="">
        <Image src="/assets/svg/vue.svg" alt="Vue.js" className="h-5" width={20} height={20}/>
      </FrameworkItem> */}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
