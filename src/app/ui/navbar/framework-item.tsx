"use client";

import { usePathname } from "next/navigation";
import React from "react";

type FrameworkItemProps = {
  title: string;
  children: React.ReactNode;
  link?: string;
};

export default function FrameworkItem({
  title,
  children,
  link,
}: FrameworkItemProps) {
  const pathname = usePathname();

  let content = (
    <button
      title={title}
      disabled
      className="grayscale-0 opacity-50 cursor-not-allowed border-b-2 py-1 rounded-none flex flex-row gap-2"
    >
      {children}
      <span className="lg:hidden">{title}</span>
    </button>
  );

  if (link) {
    const HREF = `${link}/${
      pathname.split("/").filter((subpath) => subpath != "")[0]
    }`;

    content = (
      <a
        title={title}
        className="grayscale hover:-translate-y-1 hover:grayscale-0 py-1 rounded-none flex flex-row gap-2"
        href={HREF}
        rel="noopener"
      >
        {children}
        <span className="lg:hidden">{title}</span>
      </a>
    );
  }

  return <li className="flex lg:items-center h-full">{content}</li>;
}
