const express = require("express");
const app = express();

const gurunabi_data = require("./db/gurunabi_data.json");

app.use(express.static("public"));

app.get("/api/restaurants", (req, res) => {
  res.status(200).json({ restaurants_info: gurunabi_data });
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("Running at Port 3000...");
});
