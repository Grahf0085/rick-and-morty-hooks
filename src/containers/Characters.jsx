import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../services/listAPI';
import ToonList from '../components/ToonList';

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [toons, setToons] = useState([]);

  useEffect(async () => {
    const toons = await fetchCharacters();
    setToons(toons);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return <ToonList toons={toons} />;
};

export default Characters;
