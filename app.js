//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();
const workItems = [];

const tasks = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

  const day=date.getDate();
  res.render("list", { listTitle: day, newlistitems: tasks });
});

app.post("/", function (req, res) {
  const task = req.body.newitem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    tasks.push(task);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newlistitems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/work", function (req, res) {
  let item = req.body.newitem;
  workItems.push(item);
  res.redirect("/work");
});
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
