export const searchTracks = (query) => (dispatch) => {
  console.log("ricerca:", query);
  dispatch({ type: "SEARCH_START", payload: query });

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("dati ricevuti:", data);
      dispatch({ type: "SEARCH_SUCCESS", payload: data.data });
    })
    .catch((error) => {
      console.error("errore:", error);
      dispatch({ type: "SEARCH_FAIL", payload: error.message });
    });
};
