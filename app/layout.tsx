"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div onMouseOver={() => {}} onMouseOut={() => {}}>
      <h1>RealtorBot AI</h1>
      {children}
    </div>
  );
}