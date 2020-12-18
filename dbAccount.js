import mongoose from "mongoose";
// const { Schema } = mongoose;

const accountSchema = mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  sources: String,
  thumb: String,
});

export default mongoose.model("tiktok", accountSchema);
