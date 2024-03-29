import { Router } from "express";
import Breed from "../models/Breed.js";
import {
  breedNameExist,
  lifeSpanYears,
  searchTemperamentInDB,
  someDataUndefined,
  arrToString,
  twoStrToOneString,
} from "../utils/index.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    let allBreeds = await Breed.find();
    return res.send(allBreeds);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    let breedFinded = await Breed.findOne({ _id });
    res.send(breedFinded);
  } catch (err) {
    res.status(404).send(err);
  }
});

router.post("/", async (req, res) => {
  const { name, weightMax, weightMin, height, lifeSpan, temperamentsArr, img } =
    req.body;
  if (someDataUndefined(req.body)) {
    return res.status(404).send("Some data is not defined");
  }
  if (await breedNameExist(name)) {
    return res.status(404).send("Breed name already exist");
  }
  try {
    let weight = twoStrToOneString(weightMin, weightMax);
    let life_span = lifeSpanYears(lifeSpan);
    let temperament = arrToString(temperamentsArr);
    let temperaments = temperamentsArr.map(
      async (value) => await searchTemperamentInDB(value)
    );
    temperaments = await Promise.all(temperaments);
    let createdBreed = await Breed.create({
      name,
      weight,
      height,
      life_span,
      temperaments,
      temperament,
      img,
      madeIn: "local",
    });
    return res.send(createdBreed);
  } catch (err) {
    console.log(err);
    return res.status(404).send(err);
  }
});

export default router;
