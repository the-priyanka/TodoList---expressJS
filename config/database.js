const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB's connection is successful"))
    .catch((err) => {
      console.log("issue in DB connection");
      console.log(err.message);
      // what is the meaning of this
      process.exit(1);
    });
};

module.exports = dbConnect;
