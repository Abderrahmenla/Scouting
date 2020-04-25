import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog
  return (
    <article>
      <div>
        <Image fluid={image.fluid} alt="single post" />
        <AniLink fade to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6>{published}</h6>
      </div>
      <div>
        <h4>{title}</h4>
      </div>
    </article>
  )
}

export default BlogCard
