import React, { useRef } from "react";
import "./ContactMeTextArea1.css";

const ContactMeTextArea1 = ({ onChange, name }) => {
  const textAreaRef = useRef(null);

  const handleInputChange = (event) => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height to auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on content
    }
    if (onChange) {
      onChange(event); // Trigger the onChange callback
    }
  };

  return (
    <div className="ContactMeTextArea1-group">
      <textarea
        ref={textAreaRef}
        required
        name="text"
        autoComplete="off"
        className="ContactMeTextArea1-textarea"
        onChange={handleInputChange}
      ></textarea>
      <label className="ContactMeTextArea1-label">{name}</label>
    </div>
  );
};

export default ContactMeTextArea1;
