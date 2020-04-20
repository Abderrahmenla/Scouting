import React from "react"

const Banner = ({ title, info, children }) => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">{title}</span>
        <span className="heading-primary--sub">{info}</span>
      </h1>
      {children}
    </div>
  )
}

export default Banner
