"use client";

import { useGetTask } from "@/features/tasks/api/useGetTask";
import { useTaskId } from "@/features/tasks/hooks/useTaskId";
import { TaskOverview } from "@/features/tasks/components/taskOverview";
import { TaskBreadcrumbs } from "@/features/tasks/components/taskBreadcrumbs";
import { TaskDescription } from "@/features/tasks/components/taskDescription";

import { PageError } from "@/components/pageError";
import { PageLoader } from "@/components/pageLoader";
import { DottedSeparator } from "@/components/dottedSeparator";

export const TaskIdClient = () => {
  const taskId = useTaskId();
  const { data, isLoading } = useGetTask({ taskId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!data) {
    return <PageError message="Task not found" />;
  }

  return (
    <div className="flex flex-col">
      <TaskBreadcrumbs project={data.project} task={data} />
      <DottedSeparator className="my-6" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TaskOverview task={data} />
        <TaskDescription task={data} />
      </div>
    </div>
  );
};
