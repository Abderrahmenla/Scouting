import React from "react"
import BlogCard from "./BlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY ")
          title
          slug
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)

  return (
    <section>
      <Title title="Our troupes" />
      <div>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
