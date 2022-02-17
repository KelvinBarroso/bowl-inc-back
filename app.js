const express = require("express");
const sequelize = require("./database");
const cors = require("cors");
const userComments = require("./UserComments");
const userSubscribe = require("./UserSubscribe");

sequelize.sync({ force: true }).then(() => console.log("db criado"));
const app = express();

app.use(cors());

app.use(express.json());

app.listen(3001, () => {
  console.log("app is running");
});

app.get("/usercomment", async (req, res) => {
  const userInfo = await userComments.findAll();
  res.send(userInfo);
});
app.get("/usersubscribe", async (req, res) => {
  const userInfo = await userSubscribe.findAll();
  res.send(userInfo);
});

app.post("/usercomment", async (req, res) => {
  await userComments.create(req.body);
  res.send("User commented.");
});

app.post("/usersubscribe", async (req, res, next) => {
  const userInfo = await userSubscribe.findAll();
  let exists = false;
  userInfo.map(({ email }) => {
    exists = email === req.body.email;
  });
  if (exists) {
    next("User already subscribed.");
    return;
  }
  await userSubscribe.create(req.body);
  res.send("User subscribed.");
});
