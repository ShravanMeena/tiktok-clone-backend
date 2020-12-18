import mongoose from "mongoose";
// const { Schema } = mongoose;

const accountSchema = mongoose.Schema({
  title: String,
  desc: String,
  song: String,
  like: String,
  comment: String,
  share: String,
  video: String,
});

export default mongoose.model("account", accountSchema);
