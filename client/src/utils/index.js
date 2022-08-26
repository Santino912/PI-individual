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

export function filterAll(
  regex,
  name,
  temperamentsRedux,
  temperamentsDog,
  group,
  dogGroup
) {
  let regexTest = regex.test(name);
  let dogsTemps = temperamentsDog?.split(", ");
  if (
    (!dogsTemps && temperamentsRedux.length > 0) ||
    (dogGroup !== group && group.length > 0)
  ) {
    return false;
  } else if (!dogsTemps && !group) {
    return regexTest;
  } else if (temperamentsRedux.length > 0 && regexTest && !group) {
    let boolean = temperamentsRedux.every((tr) =>
      dogsTemps.some((t) => tr === t)
    );
    return regexTest && boolean;
  } else if (temperamentsRedux.length > 0 && regexTest) {
    let boolean = temperamentsRedux.every(
      (tr) => dogsTemps.some((t) => tr === t) && dogGroup === group
    );
    return regexTest && boolean;
  }
  return regexTest;
}

export function breedsGroupsFilter(arr) {
  let existBreeds = [];
  arr.filter((dog) =>
    dog.breed_group && !existBreeds.includes(dog.breed_group)
      ? existBreeds.push(dog.breed_group)
      : false
  );
  return existBreeds;
}

export function filterBreedsGroups(arr, breed) {
  return !breed ? arr : arr.filter((dogs) => dogs.breed_group === breed);
}
