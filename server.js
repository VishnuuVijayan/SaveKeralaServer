const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mailer = require("./functions/sendMail");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database Connected ");
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to SaveKerala Cloud Server</h1>");
});

const disasterRouter = require("./routes/disaster");
const causalityRouter = require("./routes/causality");
const secretaryRouter = require("./routes/secretary");
const collector_listRouter = require("./routes/collector_list");
const tahsildar_listRouter = require("./routes/tahsildar_list");
const mailRouter = require("./routes/mail");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
app.use("/disaster", disasterRouter);
app.use("/causality", causalityRouter);
app.use("/secretary", secretaryRouter);
app.use("/collectorlist", collector_listRouter);
app.use("/tahsildarlist", tahsildar_listRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/mail", mailRouter);

app.listen(port, () => {
  console.log("Server is running at port 5000");
});
