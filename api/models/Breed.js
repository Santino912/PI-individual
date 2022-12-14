import mongoose from "mongoose";
const { model, Schema } = mongoose;

const breedSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
    require: true,
  },
  weight: {
    type: String,
    require: true,
  },
  height: {
    type: String,
    require: true,
  },
  temperaments: [
    {
      ref: "Temperaments",
      type: Schema.Types.Mixed,
    },
  ],
  temperament: String,
  life_span: String,
  bred_for: String,
  breed_group: String,
  madeIn: String,
});

export default model("Breed", breedSchema);
