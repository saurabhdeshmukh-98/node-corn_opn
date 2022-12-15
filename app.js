const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// const corn = require("node-schedule");
const userContro = require("./entity/user");
const corn = require("node-cron");
const { db } = require("./config/db");

const currentDate = new Date();
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
const currentYear = currentDate.getFullYear();

const dateString =
  currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
// "15-12-2022"

const router = require("./router/router");
const { Op } = require("sequelize");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

db.sync({
  alter: true,
});
console.log( dateString);
const remove_exdate = corn.schedule(
  "*/5 * * * * *",
  () => {
    console.log("++++++++++++++++++");
    console.log("scheduller is running at every day in morning...");
    userContro.destroy({
      where: {
        [Op.gte]: dateString,
        // ex_date:Date
      },
    });
  },
  {
    scheduled: true,
    timezone: "Asia/kolkata",
  }
);
remove_exdate.start();

app.listen(process.env.PORT, () => {
  db.authenticate();
  console.log("connected to the database");
  console.log(`server is running on port number:${process.env.PORT}`);
});
