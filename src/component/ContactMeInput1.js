import React from "react";
import "./ContactMeInput1.css";

const ContactMeInput1 = ({ onChange,name}) => {
  return (
    <div className="ContactMeInput1-group">
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className="ContactMeInput1-input"
        onChange={onChange}
      />
      <label className="ContactMeInput1-label">{name}</label>
    </div>
  );
};

export default ContactMeInput1;
