import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = Schema({
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const Breed = model("user", userSchema);
