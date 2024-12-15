import React from "react";
import "./SkillCard1.css";

const SkillCard1 = ({ name, items }) => {
  return (
    <div className="SkillCard1">
      <div className="SkillCard1__border"></div>
      <div className="SkillCard1_title__container">
        <svg className="svg">
          <path className="path"></path>
        </svg>
        <span className="SkillCard1_title">{name}</span>
      </div>
      <hr className="SkillCard1_line" />
      <ul className="SkillCard1__list">
        {items.map((item, index) => (
          <li key={index} className="SkillCard1__list_item">
            {/* Replace SVG with an <img> tag */}
            <span className="SkillCard1_check">
              <img
                className="SkillCard1_check_image"
                src={item.icon} // Dynamically use the icon URL
                alt={`${item.title} icon`} 
              />
            </span>
            <span className="SkillCard1_list_text">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard1;


{/* <ul className="SkillCard1__list">
{items.map((item, index) => (
<li key={index} className="SkillCard1__list_item">
<span className="SkillCard1_check">
<svg
className="SkillCard1_check_svg"
fill="currentColor"
viewBox="0 0 16 16"
xmlns="http://www.w3.org/2000/svg"
>
<path
 clipRule="evenodd"
 d={item.icon} // Dynamically use the icon for each item
 fillRule="evenodd"
></path>
</svg>
</span>
<span className="SkillCard1_list_text">{item.title}</span>
</li>
))}
</ul> */}