import React from "react"
import links from "../constants/links"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Img
          loading
          className="footer__logo-box"
          fluid={image.image.childImageSharp.fluid}
        />
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
