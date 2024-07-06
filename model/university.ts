import mongoose from "mongoose";

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const University =
  mongoose.models.University || mongoose.model("University", universitySchema);

export default University;
