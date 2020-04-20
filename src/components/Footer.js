import React from "react"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/logo-green-1x.png"
const Footer = () => {
  const small = "images/logo-green-small-2x"
  const small1 = "images/logo-green-2x"
  const large = "images/logo-green-1x.png"
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${small} 1x, ${large} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${small} 1x, ${small1} 2x`}
            alt="Full logo"
            src={logo}
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {links.map((item, index) => {
                return (
                  <li key={index} className="footer__item">
                    <AniLink fade to={item.path} className="footer__link">
                      {item.text}
                    </AniLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/abderrahmen-lahmedi/"
              className="footer__link"
            >
              &nbsp; Abderrahmen Lahmedi
            </a>{" "}
            for{" "}
            <a href="#" className="footer__link">
              Scouting in ariena
            </a>
            . Copyright &copy; by Ensit JE {new Date().getFullYear()} all rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
