import Image from "next/image";
import FrameworkItem from "./framework-item";
import NavbarSlim from "./navbar-slim";

export default function Navbar() {
  return (
    <nav className="absolute lg:right-0 flex justify-start lg:justify-end items-center p-5 bg-transparent z-20 text-stone-300">
      <ul className="hidden lg:flex space-x-4 text-lg text-white align-middle">
        <li>Show in:</li>

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

      <NavbarSlim />
    </nav>
  );
}
