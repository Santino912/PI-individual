const axios = require("axios");
const { Temperaments } = require("../db.js");
function stringToArr(arr) {
  return typeof arr == "string" ? arr.split(", ") : false;
}

module.exports = {
  dogsApiFetch: async () => {
    let dogsFinded = await axios
      .get("https://api.thedogapi.com/v1/breeds")
      .then((data) => data);

    dogsFinded.data.map(async (breed) => {
      let { temperament } = breed;
      let arr = stringToArr(temperament);
      if (Array.isArray(arr)) {
        arr.map(async (name) => {
          const [row, boolean] = await Temperaments.findOrCreate({
            where: {
              name,
            },
          });
        });
      }
    });
  },
  stringToArr(arr) {
    return typeof arr == "string" ? arr.split(", ") : false;
  },
  twoStrToOneString: (aStr, bStr) => {
    return `${aStr}-${bStr}`;
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
