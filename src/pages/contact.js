import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <main>
        <StyledHero img={data.contactBcg.childImageSharp.fluid} />
        <Contact />
      </main>
    </Layout>
  )
}
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
