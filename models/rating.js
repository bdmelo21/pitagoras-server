const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ratingSchema = new Schema(
  { usernameStudent: String, usernameTeacher: String, rating: Number },
  {
    timestamps: true,
  }
);
const Rating = mongoose.model("AvailableUser", ratingSchema);
module.exports = Rating;
