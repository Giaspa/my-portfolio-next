import { usePathname } from "next/navigation";
import { useState } from "react";

type PointType = "about" | "projects" | "skills" | "contacts";

type SlimItemProps = {
  point: PointType;
  onNavigate: (point: PointType) => void;
  isActive: boolean
};

export default function SlimItem({ point, onNavigate, isActive }: SlimItemProps) {
  const pathname = usePathname();

  function toNavigate() {
    onNavigate(point);
  }

  return (
    <button
      onClick={() => toNavigate()}
      className={`text-lg font-semibold capitalize ${
        isActive ? "underline underline-offset-2" : ""
      }`}
    >
      {point}
    </button>
  );
}
