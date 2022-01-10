import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: 20,
        padding: 20,
        backgroundColor: "#3B82F6",
        textAlign: "center",
        color: "white",
      }}
    >
      <h5>
        {" "}
        Copyright © {new Date().getFullYear()} corona-react-app by muhamad ridho
      </h5>
    </div>
  );
};

export default Footer;
