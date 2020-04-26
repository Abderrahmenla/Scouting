import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
const Day = ({ day, info }) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }
  return (
    <article>
      <h4>
        {day}
        <button onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day
