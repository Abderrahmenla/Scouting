import React from "react"
import Image from "gatsby-image"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import PropTypes from "prop-types"

const Tour = ({ tour }) => {
  const { name, price, country, days, slug, images } = tour
  console.log(country)

  let mainImage = images[0].fluid

  return (
    <article>
      <div>
        <Image fluid={mainImage} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div>
        <h3>{name}</h3>
        <div>
          <h4>
            <FaMap />
            {country || "default country"}
          </h4>
          <div>
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
