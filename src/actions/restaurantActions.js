import { FETCH_RESTAURANTS, NEW_RESTAURANT } from './types';

export const fetchRestaurants = () => dispatch => {
	fetch('http://localhost:3000/api/restaurants')
	.then(res => res.json())
	.then(data => dispatch({
		type: FETCH_RESTAURANTS,
		payload: data
	}));	
	
}

export const newRestaurant = restaurantData => dispatch => {
	console.log('action called')
	fetch('http://localhost:3000/api/restaurants', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(restaurantData)
		})
		.then(res => res.json())
		.then(data => dispatch({
		type: NEW_RESTAURANT,
		payload: data
	}));
}