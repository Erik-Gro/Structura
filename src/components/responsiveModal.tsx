import { useMedia } from "react-use";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface ResponsiveModalProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

const ResponsiveModal = ({
  children,
  open,
  onOpenChange,
  title = "Dialog Title",
}: ResponsiveModalProps) => {
  const [_isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDesktop = useMedia("(min-width: 1024px)", true);

  if (!_isMounted) return null;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
          <DialogTitle>
            <VisuallyHidden>{title}</VisuallyHidden>
          </DialogTitle>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DialogTitle>
          <VisuallyHidden>{title}</VisuallyHidden>
        </DialogTitle>
        <div className="overflow-y-auto hide-scrollbar max-h-[85vh]">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default dynamic(() => Promise.resolve(ResponsiveModal), { ssr: false });
