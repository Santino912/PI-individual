const { Router } = require("express");
const { Breeds, Temperaments } = require("../db");
const router = Router();
const { dogsApiFetch, twoStrToOneString } = require("../utils/addData");
const axios = require("axios");
const { stringToArr } = require("../utils/addData");

//add temperaments to DB
//dogsApiFetch();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let breedsFetched = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((data) => data);
    breedsFetched = breedsFetched.data.map((breed) => {
      const { name, life_span, breed_group, temperament, image } = breed;
      return {
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
    let breedsInData = await Breeds.findAll({
      include: Temperaments,
    });
    let concat =
      breedsInData.length < 1
        ? breedsFetched
        : breedsInData.concat(breedsFetched);
    let id = 0;
    concat.map((dog) => (dog.id = id++));
    if (name) {
      let regex = new RegExp(`${name}`, "i");
      let final = concat.filter((act) => regex.test(act.breed_group));
      if (final.length < 1) {
        return res.json(["Dogs can´t found"]);
      }
      return res.json(final);
    } else {
      return res.json(concat);
    }
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let breedsFetched = await axios
      .get("http://localhost:3001/dogs")
      .then((data) => data);
    breedsFetched = await breedsFetched.data.find((breed) => breed.id == id);
    if (!breedsFetched) {
      return res.json({ error: `error` });
    } else {
      return res.json(breedsFetched);
    }
  } catch (err) {
    return res.json(err);
  }
});

router.post("/", async (req, res) => {
  const { name, weightMax, weightMin, height, life_span, temperament, img } =
    req.body;
  if (
    !name ||
    !weightMax ||
    !weightMin ||
    !height ||
    !life_span ||
    !temperament ||
    !img
  ) {
    return res.status(404).send("empty body");
  }
  try {
    let weight = twoStrToOneString(weightMin, weightMax);
    let arrTemperament = stringToArr(temperament);
    let breed = await Breeds.create({
      name,
      weight,
      height,
      life_span,
      img,
    });
    arrTemperament.map(async (name) => {
      let findTemp = await Temperaments.findOne({
        where: {
          name,
        },
      });
      await breed.addTemperament(findTemp);
    });
    return;
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
