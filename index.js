require("dotenv").config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/twitter", (req, res) => {
  res.send("hsfsdhfhdsf");
});
app.get("/hussaini", (req, res) => {
  res.send("<h1>Hussaini</h1>");
});
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
