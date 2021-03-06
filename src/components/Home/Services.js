import React from "react"
import Title from "../Title"
import carddetails from "../../constants/carddetails"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../Image.js"
const Services = () => {
  return (
    <section className="section-troupes" id="section-troupes">
      <Title title="MOST POPULAR TROUPES" />
      <div className="row">
        {carddetails.map((item, index) => {
          return (
            <div className="col-1-of-3" key={index}>
              <div className="card" key={index + 1}>
                <div className="card__side card__side--front" key={index + 2}>
                  <Image
                    classi={`card__picture card__picture--${index + 1}`}
                    imgsrc={`nat-${index + 5}.jpg`}
                    lin={item.linear}
                  />

                  <h4 className="card__heading">
                    <span
                      className={`card__heading-span card__heading-span--${index +
                        1}`}
                    >
                      {item.title}
                    </span>
                  </h4>
                  <div className="card__details" key={index + 3}>
                    <ul>
                      {item.l.map((ll, index) => {
                        return <li key={ll.id}>{ll.lll}</li>
                      })}
                    </ul>
                  </div>
                </div>
                <div
                  className={`card__side card__side--back card__side--back-${index +
                    1}`}
                  key={index + 4}
                >
                  <div className="card__cta" key={index + 5}>
                    <div className="card__price-box">
                      <p className="card__price-only">{item.text}</p>
                      <p className="card__price-value">{item.year}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      {item.btn}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="u-center-text u-margin-top-huge">
        <AniLink fade to="/troupes" className="btn btn--green">
          Discover all troupes
        </AniLink>
      </div>
    </section>
  )
}

export default Services
