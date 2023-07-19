"use client";

import React from "react";
import { usePathname } from "next/navigation";

function NotFound() {
  const pathname = usePathname();
  const domain = window.location.origin;

  return (
    <div
      style={{
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "var(--rainstorm)",
          marginBottom: "1rem",
        }}
      >
        404 :(
      </div>
      <div>Page not found at endpoint {domain + pathname}</div>
    </div>
  );
}

export default NotFound;
