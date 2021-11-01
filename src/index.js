require("dotenv").config();
process.env.NODE_ENV === "development" && console.clear();
//
const mongoose = require("mongoose");
const express = require("express");
const Category = require("./db/models/Category");

mongoose.connect(process.env.DB_URL);
const PORT = process.env.PORT ?? 7714;
const app = express();

app.use("/new-category", async (req, res) => {
  try {
    const category = await Category.findById("617fbc5e8de67f93b0d903b4").exec();
    res.status(200).json({ error: null, data: category });
  } catch (err) {
    res.status(500).json({
      error: err,
      data: null,
    });
  }
});

app.listen(PORT, () =>
  console.log(`server started on http://localhost:${PORT}`)
);
