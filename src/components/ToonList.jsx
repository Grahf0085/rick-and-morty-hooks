import React from 'react';
import PropTypes from 'prop-types';
import Toon from './Toon';

const ToonList = ({ toons }) => {
  const toonElements = toons.map((toon) => (
    <li key={toon.id}>
      <Toon {...toon} />
    </li>
  ));

  return <ul>{toonElements}</ul>;
};

ToonList.propTypes = {
  toons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired 
    })
  ).isRequired,
};

export default ToonList;
