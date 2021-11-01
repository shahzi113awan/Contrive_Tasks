const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

const Category = mongoose.model("Category", {
  parent: [
    {
      child: [
        {
          sub_child: String,
        },
      ],
    },
  ],
});

module.exports = Category;
