import mongoose from "mongoose";
//Create schema
const studentSchema = new mongoose.Schema(
  {
    names: String,
    phone: String,
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
    courses: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "course",
      },
    ],
    adress: {
      state: {
        type: String,
      },
      city: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    age: Number,
  },
  { timestamps: true }
);

//create model of collection into DB by using schema
const student = mongoose.model("Student", studentSchema);

export default student;
