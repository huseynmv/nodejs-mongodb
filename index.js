const express = require("express");
const app = express();

const { default: mongoose } = require("mongoose");

mongoose
  .connect("mongodb+srv://root:Huseyn123@cluster0.eqtkx3v.mongodb.net/test")
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const { Schema } = mongoose;

const adminUserSchema = new Schema({
  email: String,
  password: String,
  roles: [],
});

const adminUser = mongoose.model("AdminUser", adminUserSchema);

// let admin = new adminUser({
//   email: "huseyn@test.com",
//   password: "huseyn123",
//   roles: ["Admin", "Developer"],
// });
// admin.save();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/api/admin", function (req, res) {
  adminUser.find({}, function (err, docs) {
    res.json(docs);
  });
});

app.listen(8080);
