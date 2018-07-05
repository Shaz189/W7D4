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
