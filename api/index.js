import app from "./routes/index.js";
import "./database/index.js";

app.listen(`https://dogfinderapi.onrender.com`, () => {
  console.log(`Server Started in https://dogfinderapi.onrender.com`);
});
