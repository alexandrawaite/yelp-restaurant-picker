import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    const { name, rating, location, cost } = this.props
    return (
      <div>
        <p>Name: {name}</p>
        <p>Rating: {rating}</p>
        <p>Location: {location}</p>
        <p>Cost: {cost}</p>
      </div>
    )
  }
}
