const express = require("express");
const bodyParser = require("body-parser");
const User = require("./Apis/users");
var PORT = process.env.PORT || 8080;

const app = new express();
const router = express.Router();

app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
app.use(express.json());
 
app.use("/api", User);
console.log(PORT)