export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();
  const usable = json.results;

  return usable.map(({ id, name, status, species, gender }) => ({
    id,
    name,
    status,
    species,
    gender
  }));
  
};
