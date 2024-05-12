const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const users = mongoose.model("users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../key");
const requireLogin = require("../middleware/requireLogin");

router.get("/protected", requireLogin, (req, res) => {
  res.send("Hello User");
});

router.post("/signup", (req, res) => {
  const {
    name,
    email,
    password,
    username,
    phone,
    organization,
    organization_Web,
    business_description,
  } = req.body;

  if (
    !name ||
    !email ||
    !password ||
    !username ||
    !phone ||
    !organization ||
    !organization_Web ||
    !business_description
  ) {
    return res.status(422).json({ error: "Please enter all the fields" });
  } else {
    users
      .findOne({ email: email })
      .then((savedUser) => {
        if (savedUser) {
          return res
            .status(422)
            .json({ error: "User already exists with this email" });
        }

        bcrypt
          .hash(password, 12)
          .then((hashedPassword) => {
            const user = new users({
              name,
              email,
              password: hashedPassword,
              username,
              phone,
              organization,
              organization_Web,
              business_description,
            });

            user
              .save()
              .then((user) => {
                res.json({ message: "User saved successfully" }); // Corrected 'json' typo
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({ error: "Failed to save user" }); // Handle save error
              });
          })
          .catch((hashErr) => {
            console.log(hashErr);
            res.status(500).json({ error: "Failed to hash password" }); // Handle hash error
          });
      })
      .catch((findErr) => {
        console.log(findErr);
        res.status(500).json({ error: "Failed to find user" }); // Handle find error
      });
  }
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Invalid email or password" });
  }

  users
    .findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid email or password" });
      }

      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            res.json({ token });
          } else {
            res.status(422).json({ error: "Invalid email or password" });
          }
        })
        .catch((compareErr) => {
          console.log(compareErr);
          res.status(500).json({ error: "Failed to compare passwords" }); // Handle compare error
        });
    })
    .catch((findErr) => {
      console.log(findErr);
      res.status(500).json({ error: "Failed to find user" }); // Handle find error
    });
});

module.exports = router;
