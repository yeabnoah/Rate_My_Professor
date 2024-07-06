import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

mongoose.connect(MONGO_URI);

const DbConnection = mongoose.connection;

DbConnection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

DbConnection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

export default DbConnection;
