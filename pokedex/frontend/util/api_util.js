export const fetchAllPokemon = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pokemon"
  });
};

export const fetchPokemon = (poke) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${poke.id}`
  });
};

export const createPokemon = (poke) => {
  return $.ajax({
    method: 'POST',
    url: 'api/pokemon',
    data: { poke }
  });
};
