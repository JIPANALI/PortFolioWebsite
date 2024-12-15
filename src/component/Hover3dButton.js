import React from 'react'
import "./Hover3dButton.css"
const Hover3dButton = ({name}) => {
  return (
    <button className="Hover3dButtonbox">
    <span className="Hover3dButtonbutton">{name}</span>
  </button>
  )
}

export default Hover3dButton