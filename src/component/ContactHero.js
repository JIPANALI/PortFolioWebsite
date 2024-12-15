import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./ContactHero.css";
import Hover3dButton from "./Hover3dButton";
import ContactMeInput1 from "./ContactMeInput1";
import ContactMeTextArea1 from "./ContactMeTextArea1";
import SendEmailButton from "./SendEmailButton";
import contactRight from "../assets/contactRight.png";
import Notification1 from "./Notification1";

const ContactHero = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubm, setIsSubm] = useState(false);

  const handleInputChange = (e) => setNameValue(e.target.value);
  const handleInputEmailChange = (e) => setEmailValue(e.target.value);
  const handleInputTextChange = (e) => setTextValue(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Jipan",
      from_name: nameValue,
      user_email: emailValue,
      message: textValue,
    };

    // Load environment variables
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          // Email sent successfully, show notification
          setIsSubmitted(true);
          setIsSubm(true);
          // Reset the isSubmitted state after 3 seconds
          setTimeout(() => {
            setIsSubm(false);
          }, 3000);
        },
        (error) => {
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <div className="ContactHero">
      <div className="ContactHeroConainer">
        <div className="ContactHeroConainerTop">
          <h1>Let's Connect</h1>
          <Hover3dButton name="Why are you waiting!!!" />
          <p>Drop me a line and I’ll get back to you shortly.</p>
        </div>
        <div className="ContactHeroConainerContent">
          <div className="ContactHeroConainerContentLeft">
            <ContactMeInput1 onChange={handleInputChange} name="Your Name" />
            <ContactMeInput1 onChange={handleInputEmailChange} name="Your Email" />
            <ContactMeTextArea1 onChange={handleInputTextChange} name="Write Your Message" />
            <SendEmailButton onClick={handleFormSubmit} />
            {isSubmitted && (
              <Notification1
                name="You have been successfully submitted!"
                pauseOnHover={isSubm}
              />
            )}
          </div>
          <div className="ContactHeroConainerContentRight">
            <img
              className="ContactHeroConainerContentRightImg"
              src={contactRight}
              alt="Contact illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

