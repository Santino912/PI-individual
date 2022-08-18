const { Router } = require("express");
const { Op } = require("sequelize");
const { Breed } = require("../db");
const router = Router();
const { dogsApiFetch } = require("../utils/addData");
dogsApiFetch();

router.get("/", async (req, res) => {
  const { name } = req.query;
  let breedFinded;
  try {
    if (!name) {
      breedFinded = await Breed.findAll();
      return res.json(breedFinded);
    }
    if (name) {
      breedFinded = await Breed.findAll({
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
    breedFinded = await Breed.findOne({
      where: {
        id: { [Op.eq]: id },
      },
    });
    return res.json(breedFinded);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
