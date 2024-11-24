"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CardProps = {
  children: React.ReactNode;
  title: string;
  imagePath: string;
  id: string;
  targetRoute: string;
};

export default function Card({
  children,
  title,
  imagePath,
  id,
  targetRoute,
}: CardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(pathname === `/${targetRoute}`);

  useEffect(() => {
    setIsActive(pathname === `/${targetRoute}`);
  }, [pathname, targetRoute]);

  const handleNavigate = () => {
    if (!isActive) {
      router.push(targetRoute);
    }
  };

  return (
    <article
      id={id}
      className={`flex-1 w-full h-fit rounded-2xl relative shadow-xl shadow-black ${
        !isActive ? "min-h-36 hover:-translate-y-4 hover:cursor-pointer" : ""
      }`}
      onClick={handleNavigate}
    >
      <div
        className="top-0 left-0 h-full w-full rounded-2xl absolute bg-cover bg-center z-10 opacity-10"
        style={{ backgroundImage: `url(${imagePath})` }}
      ></div>

      <div
        className={`top-0 left-0 h-full w-full rounded-2xl bg-radial-gradient p-4 relative flex flex-col justify-start ${
          !isActive ? "min-h-36" : ""
        }`}
      >
        {!isActive ? (
          <i className="fa-solid fa-arrow-up-right-from-square absolute top-4 right-4"></i>
        ) : (
          <i className="fa-solid fa-book-open absolute top-4 right-4"></i>
        )}

        <h2 className={`text-4xl font-bold ${!isActive ? "mb-5" : ""}`}>
          {title}
        </h2>

        {!isActive && <>{children}</>}
      </div>
    </article>
  );
}
