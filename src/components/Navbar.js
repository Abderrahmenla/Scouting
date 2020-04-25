import React from "react"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          {links.map((item, index) => {
            return (
              <li key={index} className="navigation__item">
                <AniLink fade to={item.path} className="navigation__link">
                  <span>{item.number}</span>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
