import { FETCH_ALL_BREEDS, FETCH_ONE_BREED } from "../actions/actions";

let initialState = {
  breedArr: [],
  breedDetail: {},
};

const reducer = (state = initialState, action) => {
  console.log(action.payload);
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
