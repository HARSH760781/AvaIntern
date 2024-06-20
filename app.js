require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var http = require("http");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
var favicon = require("serve-favicon");
var mongoose = require("mongoose");
const flash = require("connect-flash");
const { log } = require("console");
const nodemailer = require("nodemailer");
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const hostname = "cluster0.hvg2loc.mongodb.net";
const databaseName = "details";
// const db = `mongodb+srv://${username}:${password}@${hostname}/${databaseName}`;
const db = `mongodb+srv://avaintern2023:Intern2023@cluster0.hvg2loc.mongodb.net/details?retryWrites=true&w=majority&appName=Cluster0`;
console.log(db);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const courseScheme = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },

  course: {
    type: String,
  },
  mobile: {
    type: Number,
    required: true,
  },
  college: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const signupSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    // validate: {
    //   validator: function (v) {
    //     return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
    //   },
    //   message: "Please enter a valid email address",
    // },
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Course = new mongoose.model("Course", courseScheme);
const Contact = new mongoose.model("Contact", contactSchema);
const Signup = new mongoose.model("Signup", signupSchema);

var app = express();
const port = process.env.PORT || 8080;

const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

hbs.registerPartials(partialsPath);

app.use(express.static(path.join(__dirname, "./public/stylesheets")));
app.use(express.static(path.join(__dirname, "./public/javascripts")));
app.use(express.static(path.join(__dirname, "./public/images")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.json());
app.use(express.urlencoded());
// view engine setup
app.set("views", templatePath);
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
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
app.get("/course/cad", (req, res) => {
  res.render("cad");
});
app.get("/course/da", (req, res) => {
  res.render("da");
});
app.get("/course/bda", (req, res) => {
  res.render("bda");
});
app.get("/course/bde", (req, res) => {
  res.render("bde");
});
app.get("/course/bda", (req, res) => {
  res.render("bda");
});
app.get("/course/embedded-system", (req, res) => {
  res.render("embedded");
});
app.get("/course/cyber-security", (req, res) => {
  res.render("cyber-security");
});
app.get("/course/cloud-computing", (req, res) => {
  res.render("cloud");
});
app.get("/course/technical", (req, res) => {
  res.render("technical");
});
app.get("/course/non_technical", (req, res) => {
  res.render("non_technical");
});
app.get("/course/java", (req, res) => {
  res.render("java");
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
app.get("/course/ai", (req, res) => {
  res.render("ai");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/course/vlsi", (req, res) => {
  res.render("vlsi");
});
app.get("/course/system-testing", (req, res) => {
  res.render("system");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/technical", (req, res) => {
  res.render("technical");
});
app.get("/non_technical", (req, res) => {
  res.render("non_technical");
});
app.get("*", (req, res) => {
  res.status(404).render("error404");
});

app.post("/form-submit", (req, res) => {
  var myData = new Course(req.body);
  console.log(myData);
  const { fullname, email, course, mobile, college } = myData;
  myData
    .save()
    .then(() => {
      res.status(200).render("thanku");

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "support@avaintern.com",
          pass: "djru ohgk ewvh qpqb",
        },
      });
      const mailContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            background-color: #f9f9f9;
        }
        .header {
            font-size: 20px;
            margin-bottom: 20px;
            text-align: center;
        }
        .content {
            margin-bottom: 20px;
        }
        .footer {
            margin-top: 20px;
            text-align: center;
        }
        .details {
            margin-bottom: 10px;
        }
        ul {
            margin: 0;
            padding-left: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <p>Dear ${fullname},</p>
            <p>We are thrilled to welcome you to Avaintern Edutech Pvt Ltd. Thank you for registering with us. Your account has been successfully created, and you are now a part of our community.</p>
        </div>
        <div class="content">
            <div class="details">
                <p><strong>Name:</strong> ${fullname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <p><strong>College:</strong> ${college}</p>
                <p><strong>Course:</strong> ${course}</p>
            </div>
            <p>To get started, please visit our website page. Once visited, you can explore all the features and benefits we offer, including:</p>
            <ul>
                <li>Live Session</li>
                <li>LMS access</li>
                <li>Certification</li>
                <li>Placement assistance</li>
            </ul>
            <p>If you have any questions or need assistance, our support team is here to help.</p>
            <p>You can reach us at <a href="mailto:support@avaintern.com">support@avaintern.com</a> or contact us at 9606670754.</p>
        </div>
        <div class="footer">
            <p>Best regards,</p>
            <p>The Avaintern Team</p>
        </div>
    </div>
</body>
</html>
`;

      // Email content
      const mailOptions = {
        from: '"Support Team" <support@avaintern.com>',
        to: [email, "avaintern2023@gmail.com"].join(","),
        subject: "Welcome to Avaintern Edutech Pvt Ltd!",
        html: mailContent,
        headers: {
          "Content-Type": "text/html",
        },
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          res.status(500).send("Error sending email");
        } else {
          console.log("Email sent:", info.response);
          res.status(200).send("Email sent successfully");
        }
      });
    })
    .catch((err) => {
      console.error("Error saving data:", err);
      res.status(404).render("error");
    });
});
app.post("/contact", (req, res) => {
  console.log("Hello");
  var myData = new Contact(req.body);
  console.log(myData);
  myData
    .save()
    .then(() => {
      // console.log(myData);
      res.status(200).render("contact");
    })
    .catch((err) => {
      console.log(err);
      res.send('<script>alert("Please try again after sometime");</script>');
    });
});
app.post("/signup", (req, res) => {
  var myData = new Signup(req.body);
  myData
    .save()
    .then(() => {
      res.status(200).render("index");
    })
    .catch((err) => {
      res.send('<script>alert("Enter a valid  Information");</script>');
    });
});

app.listen(8080, () => {
  console.log("Connection running");
});
