var express = require('express');
var think = require('./things.js');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser')
const { connectDB } = require("./config/db");


const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");
const categoryRoute = require("./routes/categoryRoute");




dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

connectDB();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send({ status: "API running!" }));

app.use("/user", userRoute);
app.use("/task", taskRoute);
app.use("/cat", categoryRoute);







app.listen(port, () => console.log(`Server started on PORT ${port}`));