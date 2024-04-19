const express = require("express");
require("./db/config");
const User = require("./db/User"); // Fix: Change the import statement to match the correct casing

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  console.log(user);
  let result = await user.save();
  res.send(result);
});

app.listen(3000);
