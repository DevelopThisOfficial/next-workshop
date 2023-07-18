"use client";
import { usePathname } from "next/navigation";
import React from "react";

function NotFound() {
  const pathname = `${window.location.origin}${usePathname()}`;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <div
        style={{
          fontSize: "6rem",
          fontWeight: "bold",
          color: "var(--azure-tide)",
        }}
      >
        404 :(
      </div>
      <p>
        No endpoint found at {` `}
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          {pathname || "this URL"}
        </span>
      </p>
    </div>
  );
}

export default NotFound;
