import React from 'react';
import PropTypes from 'prop-types';

const ToonDetailPage = ({ name, status, species, gender }) => (
  <section>
    <h2>{name}</h2>
    <h3>{status}</h3>
    <h3>{species}</h3>
    <h3>{gender}</h3>
  </section>
);

ToonDetailPage.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default ToonDetailPage;
