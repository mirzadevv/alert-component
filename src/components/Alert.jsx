import React, { useEffect, useState } from "react";
import "./Alert.css";

function Alert({ message, type = "success", duration = 2500 }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(true);
    }, 100);
    setTimeout(() => {
      setShowAlert(false);
    }, duration);
  }, []);

  return (
    <div className="alert-container">
      {showAlert ? (
        <div className={`alert ${type}-alert show-alert`}>{message}</div>
      ) : (
        <div className={`alert ${type}-alert hide-alert`}> {message} </div>
      )}
    </div>
  );
}

export default Alert;
