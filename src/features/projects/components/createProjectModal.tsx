"use client";

import ResponsiveModal from "@/components/responsiveModal";

import { CreateProjectForm } from "./createProjectForm";

import { useCreateProjectModal } from "../hooks/useCreateProjectModal";

export const CreateProjectModal = () => {
  const { isOpen, setIsOpen, close } = useCreateProjectModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateProjectForm onCancel={close} />
    </ResponsiveModal>
  );
};
