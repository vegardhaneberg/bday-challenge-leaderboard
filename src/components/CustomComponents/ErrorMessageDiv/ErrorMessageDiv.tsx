import React from "react";
import "./ErrorMessageDiv.css";

interface ErrorMessageDivProps {
  text: string;
}

const ErrorMessageDiv: React.FC<ErrorMessageDivProps> = ({ text }) => {
  return <div className="error-message-div">{text}</div>;
};

export default ErrorMessageDiv;
