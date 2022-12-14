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

export function verifTemperaments(breed) {
  if (Array.isArray(breed?.Temperaments)) {
    breed.temperament = breed.Temperaments.map((e) => e.name).join(", ");
    return breed;
  }
  return breed;
}

//Funciones para uso local

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

export const arrTemperamentsToStr = (breed) => {
  if (Array.isArray(breed.Temperaments)) {
    let temperament = breed.Temperaments.map((t) => t.name);
    temperament = temperament.join(", ");
    return {
      ...breed,
      temperament,
    };
  }
  return breed;
};
