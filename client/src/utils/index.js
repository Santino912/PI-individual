export const cutArr = (arr, index) => {
  return arr.slice(index * 8, (index + 1) * 8);
};

export const strToRegEx = (str) => {
  let test = new RegExp(`${str}`, "i");
  return test;
};

export function stringToArr(arr) {
  return arr.split(", ") ? arr.split(", ") : true;
}

export function filterAll(regex, name, temperamentsRedux, temperamentsDog) {
  let regexTest = regex.test(name);
  let a = temperamentsDog?.split(", ");
  if (!a && temperamentsRedux.length > 0) {
    return false;
  } else if (!a) {
    return regexTest;
  } else if (temperamentsRedux.length > 0 && regexTest) {
    let boolean = temperamentsRedux.every((tr) => a.some((t) => tr === t));
    return regexTest && boolean;
  }
  return regexTest;
}
