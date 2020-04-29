import React from "react"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import PropTypes from "prop-types"

const Troupe = ({ troupe }) => {
  const { name, price, country, days, slug, images } = troupe

  let mainImage = images[0].fluid

  return (
    <article className="troupe">
      <div className="troupe__imgContainer">
        <Image
          fluid={mainImage}
          className="troupe__imgContainer__img"
          alt="single troupe"
        />
        <AniLink
          fade
          to={`/troupes/${slug}`}
          className="troupe__imgContainer__link"
        >
          details
        </AniLink>
      </div>
      <div className="troupe__footer">
        <h3>{name}</h3>
        <div className="troupe__footer__info">
          <h4 className="troupe__footer__info__country">
            <FaMap className="troupe__footer__info__icon" />
            {country || "default country"}
          </h4>
          <div className="troupe__footer__info__details">
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Troupe.propTypes = {
  troupe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Troupe
