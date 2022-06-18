const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send("John D");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
