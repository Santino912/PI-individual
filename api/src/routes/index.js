const { Router } = require("express");
const temperaments = require("./temperaments");
const dogs = require("./dogs");
const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.use("/temperaments", temperaments);
router.use("/dogs", dogs);
router.get("/", (req, res) => {});

module.exports = router;
