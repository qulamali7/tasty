import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const mealSchema = new Schema({
  img: String,
  price: Number,
  name: String,
});

const mealModel = mongoose.model("meals", mealSchema);

app.get("/meals", async (req, res) => {
  const meals = await mealModel.find({});
  res.send(meals);
});

app.get("/meals/:id", async (req, res) => {
  const { id } = req.params;
  const meal = await mealModel.findById(id);
  res.send(meal);
});

app.post("/meals", async (req, res) => {
  const { img, price, name } = req.body;
  const newMeal = new mealModel({ img, price, name });
  await newMeal.save();
  res.send("Got a POST request");
});

app.put("/meals/:id", async (req, res) => {
  const { id } = req.params;
  const { img, price, name } = req.body;
  const meal = await mealModel.findByIdAndUpdate(id, { img, price, name });
  res.send("Got a PUT request at /meal");
});

app.delete("/meals/:id", async (req, res) => {
  const { id } = req.params;
  const meal = await mealModel.findByIdAndDelete(id);
  res.send("Got a DELETE request at /meal");
});

mongoose
  .connect("mongodb+srv://qulam:qulam777@cluster0.4zefuvj.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
