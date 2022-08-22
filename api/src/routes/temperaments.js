const { Router } = require("express");
const { Temperaments } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  try {
    let temps = await Temperaments.findAll();
    return res.json(temps);
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;
