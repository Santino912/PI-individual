import { strToRegEx } from "../../utils";

export const FETCH_ALL_BREEDS = "FETCH_ALL_BREEDS";
export const FETCH_ONE_BREED = "FETCH_ONE_BREED";
export const ADD_NEW_BREED = "ADD_NEW_BREED";
export const FILTER_NAME = "FILTER_NAME";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const RESET_PAGE = "RESET_PAGE";
export const FILTER_TEMPERAMENTS = "FILTER_TEMPERAMENTS";
export const FETCH_TEMPERAMENTS = "FETCH_TEMPERAMENTS";
export const RESET_ALL = "RESET_ALL";
export const SELECT_PUSH = "SELECT_PUSH";
export const DELETE_TEMPERAMENTS = "DELETE_TEMPERAMENTS";

export function allBreeds() {
  return function (dispatch) {
    return fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_ALL_BREEDS, payload: data }));
  };
}

export function fetchTemperaments() {
  return function (dispatch) {
    return fetch("http://localhost:3001/temperaments")
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_TEMPERAMENTS, payload: data }));
  };
}

export function oneBreed(breedId) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs/${breedId}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_ONE_BREED, payload: data }));
  };
}

export function filterName(data) {
  let payload = { reg: strToRegEx(data), str: data };
  return { type: FILTER_NAME, payload };
}

export function changePage(i) {
  return { type: CHANGE_PAGE, payload: i };
}

export function resetPage() {
  return { type: RESET_PAGE, payload: 0 };
}

export function addFilterTemperaments(payload) {
  return { type: FILTER_TEMPERAMENTS, payload };
}

export function resetAll() {
  return { type: RESET_ALL };
}

export function deleteTemperament(payload) {
  return { type: DELETE_TEMPERAMENTS, payload };
}

export function addBreed(data) {
  return {};
}
