import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO"

const blog = ({ data }) => {
  const backgroundFluidImageStack = [
    data.blogBcg.childImageSharp.fluid,
    `linear-gradient(rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8))`,
  ].reverse()
  return (
    <Layout>
      <SEO title="Blog" />
      <main>
        <StyledHero img={backgroundFluidImageStack} />
        <BlogList />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default blog
