import React, { Component } from 'react'

export default class Restaurant extends Component {
  render() {
    const { name, rating, location, cost } = this.props.restaurant
    return (
      <div>
        <p>Name: {name}</p>
        <p>Rating: {rating}</p>
        <p>Location: {location.city}</p>
        <p>Cost: {cost}</p>
      </div>
    )
  }
}
