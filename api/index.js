import app from "./routes/index.js";
import "./database/index.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server Started in http://localhost:${PORT}`);
});
