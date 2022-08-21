export const FETCH_ALL_BREEDS = "FETCH_ALL_BREEDS";
export const FETCH_ONE_BREED = "FETCH_ONE_BREED";
export const ADD_NEW_BREED = "ADD_NEW_BREED";

export function allBreeds() {
  return function (dispatch) {
    return fetch("http://localhost:3001/dogs")
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_ALL_BREEDS, payload: data }));
  };
}

export function oneBreed(breedId) {
  return function (dispatch) {
    return fetch(`http://localhost:3001/dogs/${breedId}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: FETCH_ONE_BREED, payload: data }));
  };
}
export async function addBreed(data) {
  return {};
}
