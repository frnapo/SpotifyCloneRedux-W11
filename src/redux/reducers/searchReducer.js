const initialState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: null,
      };
    case "SEARCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
