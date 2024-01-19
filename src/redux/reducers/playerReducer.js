const initialState = {
  currentTrack: null,
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_TRACK":
      return {
        ...state,
        currentTrack: action.payload,
      };
    default:
      return state;
  }
}
