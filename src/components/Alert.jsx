import React, { useEffect, useState } from "react";
import "./Alert.css";

function Alert({ message }) {
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowAlert(true);
    }, 100);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, []);

  return (
    <div className="alert-container">
      {showAlert ? (
        <div className={`alert show-alert`}>{message}</div>
      ) : (
        <div className={`alert hide-alert`}> {message} </div>
      )}
    </div>
  );
}

export default Alert;
