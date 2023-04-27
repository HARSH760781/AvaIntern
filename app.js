var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");

var app = express();
const port = process.env.PORT || 8080;

const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "./public/stylesheets")));
app.use(express.static(path.join(__dirname, "./public/images")));

// view engine setup
app.set("views", templatePath);
app.set("view engine", "hbs");

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/faq", (req, res) => {
  res.render("faq");
});
app.get("/career", (req, res) => {
  res.render("career");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/career", (req, res) => {
  res.render("career");
});
app.get("/course", (req, res) => {
  res.render("course");
});
app.get("/course/ai", (req, res) => {
  res.render("ai");
});
app.get("/course/ml", (req, res) => {
  res.render("ml");
});
app.get("/course/app", (req, res) => {
  res.render("app");
});
app.get("/course/cad", (req, res) => {
  res.render("cad");
});
app.get("/course/cyber", (req, res) => {
  res.render("cyber");
});
app.get("/course/ds", (req, res) => {
  res.render("ds");
});
app.get("/course/language", (req, res) => {
  res.render("language");
});
app.get("/course/marketing", (req, res) => {
  res.render("marketing");
});
app.get("/course/mern", (req, res) => {
  res.render("mern");
});
app.get("/course/python", (req, res) => {
  res.render("python");
});
app.get("/course/robot", (req, res) => {
  res.render("robot");
});
app.get("/course/web", (req, res) => {
  res.render("web");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

app.listen(8080, () => {
  console.log("Connection running");
});
