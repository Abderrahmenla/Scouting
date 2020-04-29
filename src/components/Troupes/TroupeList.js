import React, { Component } from "react"
import Troupe from "./Troupe"

export default class TroupeList extends Component {
  state = {
    troupes: [],
    sortedtroupes: [],
  }

  componentDidMount() {
    this.setState({
      troupes: this.props.troupes.edges,
      sortedtroupes: this.props.troupes.edges,
    })
  }

  render() {
    return (
      <section className="section-troupes">
        <div className="u-center-text u-margin-top-big">
          <h2 className="heading-secondary">our troupes</h2>
        </div>
        <div className="center">
          {this.state.sortedtroupes.map(({ node }) => {
            return <Troupe key={node.contentful_id} troupe={node} />
          })}
        </div>
      </section>
    )
  }
}
