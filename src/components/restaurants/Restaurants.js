import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  
  restaurantList = () => {
    return this.props.restaurants.map(restaurant => {
      return (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          deleteRestaurant={this.props.deleteRestaurant}
        />
      )
    })
  }
  
  render() {
    return(
      <ul>
        {this.restaurantList()}
      </ul>
    );
  }

};

export default Restaurants;