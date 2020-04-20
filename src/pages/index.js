import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"
import FeaturedTroupes from "../components/Home/FeaturedTroupes"
import SEO from "../components/SEO"
import SimpleHero from "../components/SimpleHero"
import Popup from "../components/Popup"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is description" />
    <header>
      <SimpleHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner title="Scouting" info="is where life happens">
          <AniLink fade to="/tours" className="btn btn--white btn--animated">
            Discover troupes
          </AniLink>
        </Banner>
      </SimpleHero>
    </header>
    <main>
      <About />
      <Services />
      <FeaturedTroupes />
    </main>
    <Popup />
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
