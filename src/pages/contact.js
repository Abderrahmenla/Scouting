import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default function contact({ data }) {
  const backgroundFluidImageStack = [
    data.contactBcg.childImageSharp.fluid,
    `linear-gradient(rgba(126, 213, 111, 0.8),rgba(40, 180, 133, 0.8))`,
  ].reverse()
  return (
    <Layout>
      <SEO title="Contact" description="a contact page in order to reach us" />
      <main>
        <StyledHero img={backgroundFluidImageStack} />
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
