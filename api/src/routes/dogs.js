const { Router } = require("express");
const { Op } = require("sequelize");
const { Breeds, Dogs } = require("../db");
const router = Router();
const { dogsApiFetch } = require("../utils/addData");

//dogsApiFetch();

router.get("/", async (req, res) => {
  const { name } = req.query;
  let breedFinded;
  try {
    if (!name) {
      breedFinded = await Breeds.findAll();
      return res.json(breedFinded);
    }
    if (name) {
      breedFinded = await Breeds.findAll({
        where: {
          breedGroup: { [Op.iLike]: name },
        },
      });
      return res.json(breedFinded);
    }
  } catch (err) {
    return res.status(404).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    breedFinded = await Breeds.findOne({
      where: {
        id: { [Op.eq]: id },
      },
    });
    return res.json(breedFinded);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  const { name, weight, height, lifeSpan } = req.body;
  try {
    await Dogs.create({
      name,
    });
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
