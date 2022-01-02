import React from "react";

const d = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[d.getMonth()];
const date = new Date().getDate();
const year = new Date().getFullYear();
const minutes = new Date().getMinutes();
const hours = new Date().getHours();

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#3B82F6",
        padding: `20px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        borderBottom: "20px solid rgb(37, 99, 235)",
        color: "white",
      }}
    >
      <h1>COVID19-TRACKER</h1>
      <p style={{ opacity: 0.7, marginTop: 5 }}>
        Updated At {date} {month} {year} {hours}:{minutes}
      </p>
    </div>
  );
};

export default Navbar;
