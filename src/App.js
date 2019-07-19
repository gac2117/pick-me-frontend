import React, {Component} from 'react';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer'
import RestaurantList from './components/restaurants/RestaurantList'
import RandomRestaurant from './components/RandomRestaurant'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Navbar'

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
		    <div className="App">
			  	<React.Fragment>
				  	<NavBar />
					    <h1>Pick Me Pick Me!</h1>
						<Route exact path="/" component={RestaurantList} />
					 	<Route exact path="/new" component={RestaurantContainer} />
			        	<Route exact path="/random" component={RandomRestaurant} />
	        	</React.Fragment>
			</div>
		</BrowserRouter>
    );
  }
}

export default App;
