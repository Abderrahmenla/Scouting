import React from "react"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import PropTypes from "prop-types"

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour

  let mainImage = images[0].fluid

  return (
    <article className="tour">
      <div className="tour__imgContainer">
        <Image
          fluid={mainImage}
          className="tour__imgContainer__img"
          alt="single tour"
        />
        <AniLink
          fade
          to={`/tours/${slug}`}
          className="tour__imgContainer__link"
        >
          details
        </AniLink>
      </div>
      <div className="tour__footer">
        <h3>{name}</h3>
        <div className="tour__footer__info">
          <h4 className="tour__footer__info__country">
            <FaMap className="tour__footer__info__icon" />
            {country || "default country"}
          </h4>
          <div className="tour__footer__info__details">
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Tour
