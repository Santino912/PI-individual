import {
  CHANGE_PAGE,
  FETCH_ALL_BREEDS,
  FETCH_ONE_BREED,
  FILTER_NAME,
  RESET_PAGE,
  FILTER_TEMPERAMENTS,
  FETCH_TEMPERAMENTS,
  RESET_ALL,
  DELETE_TEMPERAMENTS,
} from "../actions";

let base = {
  breedArr: [],
  breedDetail: {},
  strFilter: { reg: new RegExp(""), str: "" },
  indexPage: 0,
  filterTemperaments: [],
  allTemperaments: [],
};
let initialState = {
  breedArr: [],
  breedDetail: {},
  strFilter: { reg: new RegExp(""), str: "" },
  indexPage: 0,
  filterTemperaments: [],
  allTemperaments: [],
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
    case FILTER_NAME:
      return {
        ...state,
        strFilter: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        indexPage: action.payload,
      };
    case RESET_PAGE:
      return {
        ...state,
        indexPage: action.payload,
      };
    case FILTER_TEMPERAMENTS:
      return {
        ...state,
        filterTemperaments: [action.payload, ...state.filterTemperaments],
      };
    case FETCH_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };
    case RESET_ALL:
      return {
        ...base,
      };
    case DELETE_TEMPERAMENTS:
      return {
        ...state,
        filterTemperaments: state.filterTemperaments.filter(
          (act) => act !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default reducer;
