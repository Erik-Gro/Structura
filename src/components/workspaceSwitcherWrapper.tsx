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

// import DynamicComponentWrapper from "./DynamicComponentWrapper";

// export const WorkspaceSwitcherWrapper = () => {
//   return (
//     <DynamicComponentWrapper
//       componentImport={() => import("./workspaceSwitcher").then((mod) => mod.WorkspaceSwitcher)}
//     />
//   );
// };

// "use client";

// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";

// const DynamicComponentWrapper = ({ componentImport }) => {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;
//   }

//   const DynamicComponent = dynamic(componentImport, { ssr: false });

//   return <DynamicComponent />;
// };

// export default DynamicComponentWrapper;

//2 approach

// import DynamicComponentWrapper from "./DynamicComponentWrapper";

// export const WorkspaceSwitcherWrapper = () => {
//   return (
//     <DynamicComponentWrapper
//       componentImport={() => import("./workspaceSwitcher").then((mod) => mod.WorkspaceSwitcher)}
//       loading={<div>Loading workspace switcher...</div>}  // Custom loading UI
//       errorFallback={<div>Failed to load workspace switcher. Please try again.</div>}  // Custom error UI
//     />
//   );
// };

// "use client";

// import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";

// type DynamicComponentWrapperProps = {
//   componentImport: () => Promise<{ [key: string]: React.ComponentType<any> }>;
//   loading?: React.ReactNode;  // Optional loading indicator
//   errorFallback?: React.ReactNode;  // Optional error fallback UI
//   [key: string]: any;  // To pass down additional props to the dynamically imported component
// };

// const DynamicComponentWrapper = ({
//   componentImport,
//   loading = <div>Loading...</div>,
//   errorFallback = <div>Error loading component.</div>,
//   ...props
// }: DynamicComponentWrapperProps) => {
//   const [isMounted, setIsMounted] = useState(false);
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   if (!isMounted) {
//     return null;  // Return null to prevent SSR for components that rely on browser APIs
//   }

//   const DynamicComponent = dynamic(componentImport, {
//     ssr: false,
//     loading: () => loading,  // Show loading while the component is being loaded
//     onError: () => setHasError(true),  // Handle errors in loading the component
//   });

//   if (hasError) {
//     return errorFallback;  // Show error fallback if component fails to load
//   }

//   return <DynamicComponent {...props} />;
// };

// export default DynamicComponentWrapper;
