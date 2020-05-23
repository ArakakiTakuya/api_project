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

app.get("/api/restaurants/:budget", async (req, res) => {
  const budget = req.params.budget;
  let restaurants;
  try {
    if (budget === "1") {
      restaurants = await db("restaurants").where("budget", "<", 1500).select();
    } else if (budget === "2") {
      restaurants = await db("restaurants")
        .where("budget", ">=", 1500)
        .andWhere("budget", "<", 3000)
        .select();
    } else if (budget === "3") {
      restaurants = await db("restaurants")
        .where("budget", ">=", 3000)
        .andWhere("budget", "<", 6000)
        .select();
    } else if (budget === "4") {
      restaurants = await db("restaurants")
        .where("budget", ">=", 6000)
        .select();
    }
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
