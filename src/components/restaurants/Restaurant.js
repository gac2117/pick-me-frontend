import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteRestaurant } from '../../actions/restaurantActions';
import TagContainer from '../../containers/TagContainer';
import { Card, CardBody, CardTitle, CardHeader, Button } from 'reactstrap';

const Restaurant = props => {
  const location = useLocation();
  const navigate = useNavigate();
  const restaurant = location.state?.restaurant;

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const handleClick = () => {
    props.deleteRestaurant(restaurant.id);
    navigate('/restaurants');
  };

  return (
    <div className='Container'>
      <Card style={{ border: '1px solid #4F6367', borderRadius: '5px' }}>
        <CardHeader
          style={{ backgroundColor: '#7A9E9F', color: 'white' }}
          tag='h4'
        >
          Restaurant Details:
        </CardHeader>
        <CardBody>
          <CardTitle tag='h5'>Name: {restaurant.attributes.name}</CardTitle>
          <CardTitle tag='h5'>
            Location: {restaurant.attributes.location}
          </CardTitle>
          <br />
          <Button
            style={{ backgroundColor: '#FE5F55' }}
            size='sm'
            onClick={handleClick}
          >
            Delete Restaurant
          </Button>
          <TagContainer restaurant={restaurant} />
        </CardBody>
      </Card>
    </div>
  );
};

export default connect(null, { deleteRestaurant })(Restaurant);
