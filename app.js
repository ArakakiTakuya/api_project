const express = require("express");
const app = express();

const db = require("./knex.js");

app.use(express.static("public"));

app.get("/api/restaurants", async (req, res) => {
  try {
    const restaurants = await db("restaurants").select();
    res.status(200).json({ restaurants_info: restaurants });
  } catch (err) {
    console.error("Error", err);
    res.status(500).end();
  }
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("Running at Port 3000...");
});
