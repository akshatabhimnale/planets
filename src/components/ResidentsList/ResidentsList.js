import React from "react";
import { Typography } from "@mui/material";
import "./ResidentsList.css";

const ResidentsList = ({ residents }) => {
  return (
    <ul className="residents-list">
      {" "}
      {residents.map((resident) => (
        <li key={resident.name}>
          <Typography>
            Name: {resident.name}, Height: {resident.height}, Mass:{" "}
            {resident.mass}, Gender: {resident.gender}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default ResidentsList;
