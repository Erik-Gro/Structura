"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Projects = dynamic(
  () => import("./projects").then((mod) => mod.Projects),
  { ssr: false }
);

export const ProjectsWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Projects />;
};
