import React, { FC } from "react";

import { Navigation } from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main style={{ marginBottom: "2rem" }}>{children}</main>
    </div>
  );
};
