import "dotenv/config";
import express from "express";
import breeds from "../controllers/Breeds.js";
import temperaments from "../controllers/Temperaments.js";
import cors from "cors";
//import { dogsApiFetch } from "../utils/index.js";
//dogsApiFetch();
//save temperaments data

const app = express();

app.use(cors());
app.use(express.json());

app.use("/breeds", breeds);
app.use("/temperaments", temperaments);

export default app;
