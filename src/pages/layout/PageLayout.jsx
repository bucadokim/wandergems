import React from "react";
import Header from "./Header";

export default function PageLayout({
  children,
  containerStyles,
  contentStyles,
}) {
  return (
    <section>
      <div className={containerStyles}>
        <Header />
        {children}
      </div>
    </section>
  );
}
