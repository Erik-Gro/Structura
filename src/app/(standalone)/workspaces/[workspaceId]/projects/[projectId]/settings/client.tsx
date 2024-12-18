"use client";

import { useGetProject } from "@/features/projects/api/useGetProject";
import { useProjectId } from "@/features/projects/hooks/useProjectId";
import { EditProjectForm } from "@/features/projects/components/editProjectForm";

import { PageLoader } from "@/components/pageLoader";
import { PageError } from "@/components/pageError";

export const ProjectIdSettingsClient = () => {
  const projectId = useProjectId();
  const { data: initialValues, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Project not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};
