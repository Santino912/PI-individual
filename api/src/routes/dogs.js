const { Router } = require("express");
const { Op } = require("sequelize");
const { Breeds, Dogs } = require("../db");
const router = Router();
const { dogsApiFetch } = require("../utils/addData");
const axios = require("axios");

//dogsApiFetch();

router.get("/", async (req, res) => {
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
    return res.json(concat);
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
  const {
    id,
    name,
    weight,
    height,
    life_span,
    breed_group,
    bred_for,
    temperament,
    img,
  } = req.body;
  if (!id || !name || !weight || !height || !temperament || !img) {
    return res.send({
      id,
      name,
      weight,
      height,
      temperament,
      life_span,
      breed_group,
      bred_for,
    });
  }
  try {
    let breed = await breed.create({
      id,
      name,
      weight,
      height,
      temperament,
      life_span,
      breed_group,
      bred_for,
      img,
    });
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
