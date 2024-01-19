const initialState = {
  likedTracks: {},
};

export default function likesReducer(state = initialState, action) {
  switch (action.type) {
    case "LIKE_TRACK":
      return {
        ...state,
        likedTracks: { ...state.likedTracks, [action.payload]: true },
      };
    case "UNLIKE_TRACK":
      return {
        ...state,
        likedTracks: { ...state.likedTracks, [action.payload]: false },
      };
    default:
      return state;
  }
}
