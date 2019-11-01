import React from "react";

export const Layout = ({ children }) => (
  <div
    style={{
      width: "80vw",
      height: "70vh",
      padding: "2vh 5vw",
      margin: "5vh",
      backgroundColor: "#FFFFDD",
      color: "#1E1E1E",
      fontSize: "2vw",
      whiteSpace: "pre-wrap",
    }}
  >
    {children}
  </div>
);
