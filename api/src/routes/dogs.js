const { Router } = require("express");
const { Op } = require("sequelize");
const { Breeds, Dogs, Temperaments } = require("../db");
const router = Router();
const { dogsApiFetch } = require("../utils/addData");
const axios = require("axios");
const { stringToArr } = require("../utils/addData");

//dogsApiFetch();

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    let breedsFetched = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((data) => data);
    breedsFetched = breedsFetched.data.map((breed) => {
      const {
        id,
        name,
        weight,
        height,
        life_span,
        breed_group,
        bred_for,
        temperament,
        image,
      } = breed;
      return {
        id,
        name,
        weight: weight.imperial,
        height: height.imperial,
        life_span,
        breed_group,
        bred_for,
        temperament,
        img: image.url,
      };
    });
    let breedsInData = await Breeds.findAll();
    let concat =
      breedsInData.length < 1
        ? breedsFetched
        : breedsInData.concat(breedsFetched);
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
      .get("https://api.thedogapi.com/v1/breeds")
      .then((data) => data);
    breedsFetched = await breedsFetched.data.find((breed) => breed.id == id);
    if (!breedsFetched) {
      let breedFinded = await Breeds.findOne({
        where: {
          id: { [Op.eq]: id },
        },
      });
      breedFinded = breedFinded == null && [`El id ${id} no se econtro`];
      return res.json(breedFinded);
    } else {
      return res.json(breedsFetched);
    }
  } catch (err) {
    return res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      name,
      weight,
      height,
      life_span,
      breed_group,
      bred_for,
      temperament,
      img,
    } = req.body;
    let arrTemperament = stringToArr(temperament);
    console.log(arrTemperament);
    let breed = await Breeds.create({
      name,
      weight,
      height,
      life_span,
      breed_group,
      bred_for,
      img,
    });
    arrTemperament.map((tem) =>
      breed.createTemperaments(Temperaments, { through: tem })
    );
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
