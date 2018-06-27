import React from 'react';
import PropTypes from 'prop-types';
import './eventcard.css';

function EventCard(props){
  return(
    <div className='event-card-wrapper'>
      <div className='image'>
        <img src={props.image} />
      </div>

      <div className='price'>

        <p>{props.price}</p>

      </div>

      <h3>{props.name}</h3>
      <p>{props.date}</p><p> - {props.location}</p>
    </div>
  );
}

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default EventCard;
