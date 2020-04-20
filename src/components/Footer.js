import React from "react"
import styles from '../css/footer.module.css'
import links from '../constants/links'
import socialicons from '../constants/social-icons'
import AniLink from "gatsby-plugin-transition-link/AniLink"; // for transition effect between pages

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item,index)=>{
          return <AniLink fade key={index} to={item.path}>
                  {item.text}
                 </AniLink>
        })}
      </div>
      <div className={styles.icons}>
        {socialicons.map((item,index)=>{
          return <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.icon}
                  </a>
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Abderrahmen Lahmedi {new Date().getFullYear()} all rights reserved
      </div>
    </footer>
  )
}

export default Footer
