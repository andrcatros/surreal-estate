import React from "react";

import "../styles/Alert.css";

const Alert = ({ alert }) => {
  if (alert.isSuccess) {
    return (
      <div
        className="Alert"
        style={{ borderStyle: "solid", borderColor: "green" }}
      >
        {alert.message}!
      </div>
    );
  }
  return (
    <div className="Alert" style={{ borderStyle: "solid", borderColor: "red" }}>
      {alert.message}!
    </div>
  );
};

export default Alert;
