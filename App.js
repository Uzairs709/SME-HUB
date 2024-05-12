const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const { MONGOURI } = require("./key");
app.use(cors()); // Enable CORS for all routes
// app.use(express.static(path.join(__dirname, "public")));

require("./modles/users");

app.use(express.json());
app.use(require("./routes/auth"));

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected to db");
});
mongoose.connection.on("error", (err) => {
  console.log("connecting to error", err);
});

app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
