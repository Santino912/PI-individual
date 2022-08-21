const axios = require("axios");
const { Breeds, Temperaments } = require("../db.js");
function stringToArr(arr) {
  return typeof arr == "string" ? arr.split(", ") : false;
}

module.exports = {
  dogsApiFetch: async () => {
    let dogsFinded = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((data) => data);

    dogsFinded.data.map(async (breed) => {
      let { name, life_span, bred_for, breed_group, temperament } = breed;
      let breedsCreated = await Breeds.create({
        name,
        lifeSpan: life_span,
        weight: breed.weight.imperial,
        height: breed.height.imperial,
        breedFor: bred_for,
        breedGroup: breed_group,
      });

      let arr = stringToArr(temperament);
      if (Array.isArray(arr)) {
        arr.map(async (name) => {
          const [row, boolean] = await Temperaments.findOrCreate({
            where: {
              name,
            },
          });
          await breedsCreated.addTemperament(row, { name });
        });
      }
    });
  },
};

/* arr.map(async (name) => {
  let findTemp = await Temperaments.findOne({
    where: {
      name,
    },
  });
  console.log(findTemp, { name }, await Temperaments.findAll());
  if (findTemp == null) {
    await Temperaments.create({
      name,
    });
  }
  return;
}); */
