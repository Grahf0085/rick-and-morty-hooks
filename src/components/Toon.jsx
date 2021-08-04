import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Toon = ({ id, name, image }) => (
  <figure>
    <Link to={`/character/${id}`}>
      <img src={image} alt={name} />
    </Link>
  </figure>
);

Toon.propTypes = {
  id:PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Toon;
