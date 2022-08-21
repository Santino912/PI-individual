import { FETCH_ALL_BREEDS, FETCH_ONE_BREED } from "../actions";

let initialState = {
  breedArr: [],
  breedDetail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BREEDS:
      return {
        ...state,
        breedArr: action.payload,
      };
    case FETCH_ONE_BREED:
      return {
        ...state,
        breedDetail: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
