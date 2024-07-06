import mongoose, { Schema } from "mongoose";

const professorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
  },
  campus: {
    type: String,
  },
  Details: {
    type: String,
  },
  reviews: {
    type: [
      {
        review: String,
        rate: Number,
      },
    ],
  },
  University: {
    type: Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },
});

const Professor =
  mongoose.models.Professor || mongoose.model("Professor", professorSchema);

export default Professor;
