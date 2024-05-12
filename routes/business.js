const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Business = mongoose.model("business");

router.get("/business", (req, res) => {
  Business.find()
    .then((business) => {
      res.json({ business });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch data" });
    });
});

module.exports = router;
