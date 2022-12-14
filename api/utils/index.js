import axios from "axios";
import Temperament from "../models/Temperament.js";
import Breed from "../models/Breed.js";

export const dogsApiFetch = async () => {
  const temperamentsArr = [];
  let dogsFinded = await axios
    .get("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.data.map((breed) => stringToArr(breed.temperament)));
  splitArrToString(dogsFinded, temperamentsArr);
  temperamentsArr.map(async (name) => await Temperament.create({ name }));
};
const splitArrToString = (arr, arrTemperaments) => {
  return arr
    .join(",")
    .split(",")
    .forEach((string) =>
      !arrTemperaments.includes(string) ? arrTemperaments.push(string) : null
    );
};
export const stringToArr = (arr) => {
  return typeof arr == "string" ? arr.split(", ") : false;
};

export const twoStrToOneString = (aStr, bStr) => {
  return `${aStr} - ${bStr}`;
};

export const someDataUndefined = (body) => {
  const { name, weightMax, weightMin, height, lifeSpan, temperamentsArr, img } =
    body;
  if (
    !name ||
    !weightMax ||
    !weightMin ||
    !height ||
    !lifeSpan ||
    !temperamentsArr ||
    !img
  )
    return true;
  return false;
};

export const searchTemperamentInDB = async (name) => {
  let temperament = await Temperament.findOne({ name });
  return temperament;
};

export const findSameBreedName = async (name) => {
  let temperament = await Temperament.findOne({ name });
  return temperament;
};

export const breedNameExist = async (name) => {
  let exist = await Breed.findOne({ name });
  return exist !== null;
};

export const apiDogRequest = async () => {
  let breedsFetched = await axios
    .get("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.data);
  breedsFetched = breedsFetched.map((breed) => {
    const { name, life_span, breed_group, temperament, image, id } = breed;
    return {
      _id: id,
      name,
      weight: breed.weight.imperial,
      height: breed.height.imperial,
      life_span,
      breed_group,
      temperament,
      img: image.url,
      madeIn: "apiDog",
    };
  });
  return breedsFetched;
};

export const concatAllBreeds = async (dogApiArr) => {
  let breedsInDB = await Breed.find();
  let concat = breedsInDB.length < 1 ? dogApiArr : breedsInDB.concat(dogApiArr);
  return concat;
};

export const fetchAllBreeds = async () => {
  let breeds = await axios("http://localhost:3001/breeds").then(
    (res) => res.data
  );
  return breeds;
};

export const lifeSpanYears = (number) => {
  let result = number.trim() + " years";
  return result;
};

export const arrToString = (arr) => {
  return arr.join(", ");
};
