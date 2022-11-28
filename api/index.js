import "dotenv/config";
import "./database/connectdb.js";
import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server Started in http://localhost:${PORT}`);
});
