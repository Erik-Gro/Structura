"use client";

import { useWorkspaceId } from "@/features/workspaces/hooks/useWorkspaceId";
import { useGetWorkspaceInfo } from "@/features/workspaces/api/useGetWorkspaceInfo";
import { JoinWorkspaceForm } from "@/features/workspaces/components/joinWorkspaceForm";

import { PageError } from "@/components/pageError";
import { PageLoader } from "@/components/pageLoader";

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initialValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Project not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
