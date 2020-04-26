import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

export default function error() {
  return (
    <Layout>
      <SEO title="Error" />
      <header>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
