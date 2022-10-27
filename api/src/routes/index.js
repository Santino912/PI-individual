const { Router } = require("express");
const temperaments = require("./temperaments");
const dogs = require("./dogs");
const express = require("express");

const { dogsApiFetch } = require("../utils/addData");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//add temperaments to DB
dogsApiFetch();

router.use(express.json());

router.use("/temperaments", temperaments);
router.use("/dogs", dogs);
router.get("/", (req, res) => {});

module.exports = router;
