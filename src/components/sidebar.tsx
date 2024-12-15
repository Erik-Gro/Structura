import Image from "next/image";
import Link from "next/link";

import { DottedSeparator } from "./dottedSeparator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcherWrapper } from "./workspaceSwitcherWrapper";
import { logo } from "@/config";
import { ProjectsWrapper } from "./ProjectsWrapper";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="logo" width={32} height={32} />
          <span className="text-lg font-semibold text-gray-800">Structura</span>
        </div>
      </Link>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcherWrapper />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <ProjectsWrapper />
    </aside>
  );
};
