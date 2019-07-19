import React, {Component} from 'react';
import { connect } from 'react-redux';

class RestaurantList extends Component {
	

	render() {

		const restaurantList = this.props.restaurants.map(restaurant => {
				return (
					<li>{restaurant.attributes.name}</li>
				)
		})

		return(
			<>
			<h3>List of Restaurants:</h3>
			{restaurantList}
			</>
		)
	}
}

const mapStateToProps = state => ({
	restaurants: state.restaurants.items
})

export default connect(mapStateToProps)(RestaurantList);