import React, { Component } from "react"
import Tour from "./Tour"

export default class TourList extends Component {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    return (
      <section className="section-tours">
        <div className="u-center-text u-margin-top-huge">
          <h2 className="heading-secondary">our troupes</h2>
        </div>
        <div className="center">
          {this.state.sortedTours.map(({ node }) => {
            return <Tour key={node.contentful_id} tour={node} />
          })}
        </div>
      </section>
    )
  }
}
