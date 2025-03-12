import React from "react";

const TitlePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-6 text-darken dark:text-white">
      <div className="h-0.5 w-18 bg-darken dark:bg-white"></div>
      <span className="text-lg font-medium uppercase tracking-[2px]">
        {children}
      </span>
    </div>
  );
};

export default TitlePage;
