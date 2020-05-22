const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => {
  console.log("Running at Port 3000...");
});
