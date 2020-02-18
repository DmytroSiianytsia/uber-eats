import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantCard.css';

export const RestaurantCard = props => {
  const {
    imageUrl,
    title,
    categories,
    etaRange,    
  } = props;

  return (
    <section className="restaurant-card">
        <div className="restaurant-card__img-block">
            <img src={imageUrl} alt={title} className="restaurant-card__img" />
        </div>
      <h2 className="restaurant-card__title">{title}</h2>
      <p className="restaurant-card__categories">
        {categories.join(' • ')}
      </p>
      <p className="restaurant-card__eta">
        {etaRange}
      </p>
    </section>
  );
};

RestaurantCard.propTypes = {  
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string,
}

RestaurantCard.defaultProps = {
  categories: [],
  etaRange: '',
}
