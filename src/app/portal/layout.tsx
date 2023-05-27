import { NavbarLat } from "@/components/navbar/NavbarLat";
import React from "react";

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2">
      <div className="h-screen w-2/12 bg-primary">
        <NavbarLat />
      </div>
      <main className="w-8/12">
        <div className="p-8 max-w-5xl flex flex-col min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PortalLayout;
