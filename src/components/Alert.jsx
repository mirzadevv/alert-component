import React, { useEffect, useState } from "react";
import "./Alert.css";

function Alert({
  message,
  type = "success",
  duration = 2500,
  closable = false,
}) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowAlert(true);
    }, 100);
    setTimeout(() => {
      !closable && setShowAlert(false);
    }, duration);
  }, []);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="alert-container">
      {showAlert ? (
        <div className={`alert ${type}-alert show-alert`}>
          {message}
          {closable && (
            <div className="close" onClick={handleClose}>
              <div className="first-line"></div>
              <div className="second-line"></div>
            </div>
          )}
        </div>
      ) : (
        <div className={`alert ${type}-alert hide-alert`}> {message} </div>
      )}
    </div>
  );
}

export default Alert;
