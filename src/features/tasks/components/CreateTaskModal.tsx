"use client";

import ResponsiveModal from "@/components/responsiveModal";

import { CreateTaskFormWrapper } from "./CreateTaskFormWrapper";

import { useCreateTaskModal } from "../hooks/useCreateTaskModal";

export const CreateTaskModal = () => {
  const { isOpen, setIsOpen, close } = useCreateTaskModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateTaskFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
