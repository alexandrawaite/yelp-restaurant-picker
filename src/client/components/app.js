import React, { Component } from 'react';
import Restaurant from './restaurant'
import RestaurantSelectButtons from './restaurant_select_buttons'
import YelpApi from '../reducers/yelp_api'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Restaurant name="Burma Superstar"
                    rating="5 stars"
                    location="Oakland"
                    cost="$$" />
        <RestaurantSelectButtons />
      </div>
    );
  }
}

/*
  Specs:
    - As a user, I should be able to select a restaurant
    - Once I select a restaurant I should see the details of the resteaurant
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
 */
