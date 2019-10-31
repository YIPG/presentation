import React from "react";

export const Layout = ({ children }) => (
  <div
    style={{
      width: "80vw",
      height: "70vh",
      padding: "2vh 5vw",
      backgroundColor: "#FFFFDD",
      color: "#1E1E1E",
      fontSize: "0.7em",
      whiteSpace: "pre-wrap",
    }}
  >
    {children}
  </div>
);
