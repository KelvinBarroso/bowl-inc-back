const express = require("express");
const sequelize = require("./database");
const cors = require("cors");
const UserInfo = require("./UserInfo");

sequelize.sync({ force: true }).then(() => console.log("db criado"));
const app = express();

app.use(cors());

app.use(express.json());

app.listen(3001, () => {
  console.log("app is running");
});

app.get("/usercomment", async (req, res) => {
  const userInfo = await UserInfo.findAll();
  res.send(userInfo);
});

app.post("/usercomment", async (req, res) => {
  await UserInfo.create(req.body);
  res.send("User commented.");
});

app.post("/usersubscribe", async (req, res) => {
  const alunos = await UserInfo.findAll();
  const exists = alunos.map(({ email }) => {
    return email === req.body.email;
  });
  if (exists) {
    res.send("User already subscribed.");
    return;
  }
  await UserInfo.create(req.body);
  res.send("User subscribed.");
});
