"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const WorkspaceSwitcher = dynamic(
  () => import("./workspaceSwitcher").then((mod) => mod.WorkspaceSwitcher),
  { ssr: false }
);

// import { WorkspaceSwitcher } from "./workspaceSwitcher";

export const WorkspaceSwitcherWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <WorkspaceSwitcher />;
};
