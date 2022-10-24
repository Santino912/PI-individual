import { breedsGroupsFilter, sortArrBy } from "../../utils";
import {
  CHANGE_PAGE,
  FETCH_ALL_BREEDS,
  FETCH_ONE_BREED,
  FILTER_NAME,
  RESET_PAGE,
  FILTER_TEMPERAMENTS,
  RESET_ALL,
  SORT_ARR_ACTION,
  RESET_BREED_DETAIL,
} from "../actions";

let base = {
  breedArr: [],
  breedDetail: {},
  strFilter: { reg: new RegExp(""), str: "" },
  indexPage: 0,
  filterTemperament: [],
  allTemperaments: [],
};
let initialState = {
  breedArr: [],
  breedDetail: {},
  strFilter: { reg: new RegExp(""), str: "" },
  indexPage: 0,
  filterTemperament: [],
  allTemperaments: [],
  breedsGroups: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BREEDS:
      return {
        ...state,
        breedArr: action.payload.data,
        allTemperaments: action.payload.dataTemperaments,
        breedsGroups: breedsGroupsFilter(action.payload.data),
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
        filterTemperament: action.payload,
      };
    case RESET_ALL:
      return {
        ...base,
      };
    case SORT_ARR_ACTION:
      return {
        ...state,
        breedArr: sortArrBy(state.breedArr, action.payload),
      };
    case RESET_BREED_DETAIL:
      return {
        ...state,
        breedDetail: {},
      };
    default:
      return state;
  }
};
export default reducer;
