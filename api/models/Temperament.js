import mongoose from "mongoose";
const { model, Schema } = mongoose;

const temperamentSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

export default model("Temperament", temperamentSchema);
