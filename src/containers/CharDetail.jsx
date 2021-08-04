import React, { useEffect, useState } from 'react';
import { fetchDetails } from '../services/detailAPI';
import ToonDetailPage from '../components/ToonDetailPage';
import PropTypes from 'prop-types';

const CharDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const [detailsAPI, setDetailsAPI] = useState([]);

  useEffect(async () => {
    const fetched = await fetchDetails(props.match.params.id);
    setDetailsAPI(fetched);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return <ToonDetailPage name={detailsAPI.name} status={detailsAPI.status} 
    species={detailsAPI.species} gender={detailsAPI.gender} />;
};

CharDetail.propTypes = {
  match: PropTypes.number.isRequired
};

export default CharDetail;
