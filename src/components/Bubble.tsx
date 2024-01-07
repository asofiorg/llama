import { type ReactNode } from "react";

export function Bubble({
  children,
  placement,
}: {
  children: ReactNode;
  placement: "left" | "rigth";
}) {
  return (
    <div
      className={`mb-4 flex space-x-1 ${
        placement == "rigth" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-64 rounded-xl p-2 text-base text-neutral-800 ${
          placement == "rigth" ? "bg-green-200" : "bg-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
