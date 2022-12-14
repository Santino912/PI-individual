import app from "./routes/index.js";
import "./database/index.js";

app.listen(PORT, () => {
  console.log(`Server Started in https://dogfinderapi.onrender.com`);
});
