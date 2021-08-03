export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();

  return json.map(({ id, name, status, species, type, gender }) => ({
    id,
    name,
    status,
    species,
    type,
    gender
  }));
  
};
