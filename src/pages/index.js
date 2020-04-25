import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Testimonials from "../components/Home/Testimonials"
import SEO from "../components/SEO"
import SimpleHero from "../components/SimpleHero"
import Popup from "../components/Popup"
import Features from "../components/Home/Features"
import Newsletter from "../components/Home/Newsletter"

export default () => (
  <Layout>
    <SEO title="Home" description="this is description" />
    <SimpleHero>
      <Banner title="Scouting" info="is where life happens">
        <AniLink fade to="/tours" className="btn btn--white btn--animated">
          Discover troupes
        </AniLink>
      </Banner>
    </SimpleHero>
    <main>
      <About />
      <Features />
      <Services />
      <Testimonials />
      <Newsletter />
      <Popup />
    </main>
  </Layout>
)
