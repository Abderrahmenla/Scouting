import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Tours from "../components/Tours/Tours"
import SEO from "../components/SEO"

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Tours" />
        <main>
          <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
          <Tours />
        </main>
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
