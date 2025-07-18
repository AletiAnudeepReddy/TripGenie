import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const tripSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Trips = models.Trips || model("Trips", tripSchema);
export default Trips;
