import React from "react";
import "./ContactButton1.css";

const ContactButton1 = ({onClick}) => {
  return (
    <div className="ContactButton1-div" onClick={onClick}>
      Contact Me
    </div>
  );
};

export default ContactButton1;
