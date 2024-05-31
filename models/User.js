const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    age: {
      type: Number,
      min: 18, // 최소 나이
      max: 65, // 최대 나이
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
