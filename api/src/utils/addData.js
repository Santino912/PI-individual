const axios = require("axios");
const { Op } = require("sequelize");
const { Breed, Temperament } = require("../db.js");
const stringInTemperament = async (string) => {
  if (typeof string !== "string") return;
  let arr = string.split(", ");
  arr.map(async (name) => {
    let findTemp = await Temperament.findOne({
      where: {
        name: {
          [Op.iLike]: name,
        },
      },
    });

    if (typeof findTemp == "object") {
      console.log(name);
    } else {
      console.log(name);
      await Temperament.create({
        name,
      });
    }
  });
};

module.exports = {
  dogsApiFetch: async () => {
    let dogsFinded = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((data) => data);
    dogsFinded.data.map(async (breed) => {
      let { name, life_span, bred_for, breed_group, temperament } = breed;
      let breeds = await Breed.create({
        name,
        lifeSpan: life_span,
        weight: breed.weight.imperial,
        height: breed.height.imperial,
        breedFor: bred_for,
        breedGroup: breed_group,
      });
      stringInTemperament(temperament);
    });
  },
};
