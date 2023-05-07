var createError = require("http-errors");
var express = require("express");
var http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
var favicon = require("serve-favicon");

var app = express();
const port = process.env.PORT || 8080;

const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "./public/stylesheets")));
app.use(express.static(path.join(__dirname, "./public/javascripts")));
app.use(express.static(path.join(__dirname, "./public/images")));
console.log(path.join(__dirname, "/public", "favicon.ico"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
// view engine setup
app.set("views", templatePath);
app.set("view engine", "hbs");

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
app.get("/course/ds", (req, res) => {
  res.render("ds");
});
app.get("/course/marketing", (req, res) => {
  res.render("marketing");
});
app.get("/course/web", (req, res) => {
  res.render("web");
});
app.get("/course/human", (req, res) => {
  res.render("human");
});
app.get("/course/business", (req, res) => {
  res.render("business");
});
app.get("/course/finance", (req, res) => {
  res.render("finance");
});
app.get("/course/ui-ux", (req, res) => {
  res.render("ux");
});
app.get("/course/dsa", (req, res) => {
  res.render("dsa");
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
