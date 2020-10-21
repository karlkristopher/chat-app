const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoConnect = async () => {
  try {
    const connection = await mongoose.connect(config.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log(
      `Successful Mongo Connection! Database name: "${connection.connections[0].name}"`
    );
  } catch (err) {
    console.log(err);
  }
};

mongoConnect();

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000/");
});

app.use("/api/test", require("./routes/test"));

module.exports = app;
