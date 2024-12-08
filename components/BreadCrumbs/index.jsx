"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumbs = () => {
  const path = usePathname();

  if (path === "/") return;

  const paths = path.split("/").filter((ele) => ele !== "");

  return (
    <div className="p-10 text-center bg-[#f5f7ff] text-black">
      <h1 className="text-2xl font-[500] mb-2">{`${paths[0].toUpperCase()}${paths.slice(
        1
      )}`}</h1>
      <Link href="/">Home</Link> /&nbsp;
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <Link href={path}>{`${path[0].toUpperCase()}${path.slice(1)}`}</Link>{" "}
          {index !== paths.length - 1 && "/ "}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
