"use client";

import ResponsiveModal from "@/components/responsiveModal";

import { EditTaskFormWrapper } from "./editTaskFormWrapper";

import { useEditTaskModal } from "../hooks/useEditTaskModal";

export const EditTaskModal = () => {
  const { taskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <EditTaskFormWrapper id={taskId} onCancel={close} />}
    </ResponsiveModal>
  );
};
