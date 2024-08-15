import { Schema, model, models } from "mongoose";

const JobSchema = new Schema({
  title: { type: String, required: true },
  remote: { type: String, required: true },
  type: { type: String, required: true },
  salary: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  jobIcon: { type: String },
  contactPerson: new Schema({
    photo: { type: String },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  }),
});

export const JobModel = models?.job || model("job", JobSchema);
