import { Router } from "express";
import Temperament from "../models/Temperament.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let temperaments = await Temperament.find();
    res.send(temperaments);
  } catch (err) {
    res.status(404).send(err);
  }
});

export default router;
