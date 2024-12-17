"use client";

import { Loader } from "lucide-react";

const LoadingPage = () => {
  console.log("loader in root of app worked!");
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingPage;
