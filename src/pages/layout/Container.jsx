import React from "react";

export default function Container({
  children,
  containerStyles,
  contentStyles,
}) {
  return (
    <div className={`flex w-full justify-center ${containerStyles}`}>
      <div className={`container ${contentStyles}`}>{children}</div>
    </div>
  );
}
