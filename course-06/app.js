const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const app = express();
const contactRoutes = require("./routes/contacts.routes");
const authRoutes = require("./routes/auth.routes");

const PORT = process.env.PORT || 4000;

const connection = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
require('./config/passport');

app.use("/api/v1", contactRoutes);
app.use("/api/v1/auth", authRoutes);

connection.then(() => {
  console.log("Database connection successful");
  app.listen(PORT, () => {
    console.log(`App listens on port ${PORT}`);
  });
}).catch((err) => {
  console.error(`Error while establishing connection: [${err}]`);
  process.exit(1);
});
