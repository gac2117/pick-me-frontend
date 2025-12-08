import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './containers/RestaurantContainer';
import RestaurantList from './components/restaurants/RestaurantList';
import RandomRestaurant from './components/RandomRestaurant';
import Restaurant from './components/restaurants/Restaurant';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import { connect } from 'react-redux';
import { fetchRestaurants } from './actions/restaurantActions';
import { fetchTags } from './actions/tagActions';

class App extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
    this.props.fetchTags();
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <NavBar />
          <br />
          <Routes>
            <Route path='/' element={<RandomRestaurant />} />
            <Route path='/new' element={<RestaurantContainer />} />
            <Route path='/restaurants' element={<RestaurantList />} />
            <Route path='/restaurant' element={<Restaurant />} />
          </Routes>
        </React.Fragment>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRestaurants, fetchTags }
)(App);
