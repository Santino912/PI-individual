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

export function equalizeArr(arr) {
  let filter = arr.filter((act) =>
    act?.Temperaments
      ? ((act.temperament = act.Temperaments.map((e) => e.name).join(", ")),
        (act.madeIn = "local"))
      : act
  );
  return filter;
}

export function filterAll(
  regex,
  name,
  temperamentRedux,
  temperamentsDog,
  group,
  dogGroup,
  madeInDog,
  madeIn
) {
  let regexTest = name.length > 0 ? regex.test(name) : true;
  let dogsTempsBoolean = temperamentsDog
    ?.split(", ")
    .some((temp) =>
      temperamentRedux.length > 0 ? temp === temperamentRedux : true
    );
  let dogGroupBreed = group.length > 0 ? group === dogGroup : true;
  let BooleanMadeIn = madeIn.length > 0 ? madeIn === madeInDog : true;
  return regexTest && dogsTempsBoolean && dogGroupBreed && BooleanMadeIn;
}

export function breedsGroupsFilter(arr) {
  let existBreeds = [];
  arr?.filter((dog) =>
    dog?.breed_group && !existBreeds?.includes(dog.breed_group)
      ? existBreeds.push(dog.breed_group)
      : false
  );
  return existBreeds;
}

export function stringToNumber(string) {
  return string.split(/-\s|-/i);
}

export function sortArrBy(arr, sort) {
  if (sort === "A" || sort === "Z") {
    let a = arr.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : a.name.toLowerCase() === b.name.toLowerCase()
        ? 0
        : -1
    );
    return sort === "A" ? a : a.reverse();
  }
  if (sort === "+" || sort === "-") {
    let a = arr.sort((a, b) => sortFunction(a, b));
    return sort === "+" ? a.reverse() : a;
  }
}

const sortFunction = (a, b) => {
  let aValue = parseInt(
    stringToNumber(a.weight)[stringToNumber(a.weight).length - 1]
  );
  let bValue = parseInt(
    stringToNumber(b.weight)[stringToNumber(b.weight).length - 1]
  );
  if (aValue > bValue) {
    return 1;
  }
  if (aValue === bValue) {
    return 0;
  } else {
    return -1;
  }
};

/* export function filterBreedsGroups(arr, breed) {
  return !breed ? arr : arr.filter((dogs) => dogs.breed_group === breed);
} */
