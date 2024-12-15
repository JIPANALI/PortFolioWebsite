import reactIcon from "../assets/reactIcon.png"
import React from "react";
import "./StakeButton.css";

const StakeButton = ({name,iconImg}) => {
  return (
    <button 
      title="Save"
      className="StakeButton cursor-pointer flex items-center fill-lime-400 bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-md duration-100 p-2"
    >
      <img className="StakeBtnIcon" src={iconImg}/>
      <span className="StakeButton-text">{name}</span>
    </button>
  );
};

export default StakeButton;
