import React, { Component } from 'react';
import Loading from './loading'
import Restaurant from './restaurant'
import RestaurantDetail from './restaurant_detail'
import RestaurantSelectButtons from './restaurant_select_buttons'
import { makeQuery } from '../../common/utils'

// What do we need to store?
// We need a way to search for restaurants so that the app can give us options

// We need to show a single restaurant on the page with a Yes or No button
  // When user clicks NO
  // => move currentRestaurant to rejectedRestaurants

  // when user clicks YES
  // => move currentRestaurant to acceptedRestaurants
  //    and move to restaurant detail page

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rejectedRestaurants: [],
      acceptedRestaurantIndex: -1,
      restaurantsFromSearch: [],
      currentRestaurantIndex: 0
    }

    this.onRestaurantReject = this.onRestaurantReject.bind(this)
    this.onRestaurantAccept = this.onRestaurantAccept.bind(this)
  }

  onRestaurantReject() {
    this.setState({currentRestaurantIndex: this.state.currentRestaurantIndex + 1})
  }

  onRestaurantAccept() {
    this.setState({acceptedRestaurantIndex: this.state.currentRestaurantIndex})
  }

  componentDidMount() {
    // TODO: Add a config for base_url
    let queryString = makeQuery({ location: 'Oakland' })

    fetch(`http://localhost:3000/yelp/search${queryString}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({restaurantsFromSearch: json})
      })
  }

  render() {
    const {restaurantsFromSearch, currentRestaurantIndex, acceptedRestaurantIndex} = this.state
    if (acceptedRestaurantIndex >= 0) {
      <RestaurantDetail restaurant={restaurantsFromSearch[acceptedRestaurantIndex]} />
    } else if (restaurantsFromSearch.length > 0) {
      let restaurant = this.state.restaurantsFromSearch[this.state.currentRestaurantIndex]
      return (
        <div>
          <Restaurant restaurant={restaurant} />
          <RestaurantSelectButtons onRestaurantReject={this.onRestaurantReject}
                                   onRestaurantAccept={this.onRestaurantAccept}/>
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

/*
  Specs:
    - As a user, I should be able to select a restaurant
    - Once I select a restaurant I should see the details of the restaurant
    - As a user, I should not see a restaurant more than once

  * Imagine shapes of data you're saving. State must contain all the information to
  meet your app specifications.

  App's State
  {
    restaurantsSeenIds: ["asdf", "jkl;"],
    currentRestaurant: {},
    restaurantsToBeSeen: [],
    restaurantSelected: {}
  }

  We will create a counter that keeps increasing when a user clicks "No" to view another restaurant. This counter will be the index of the array returned from Yelp.

*/
