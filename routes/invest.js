const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const users = mongoose.model("users");
const { JWT_SECRET, EMAIL_USER, EMAIL_PASS } = require("../key");

// Middleware to verify JWT token
const requireLogin = require("../middleware/requireLogin");

// Route to handle investment
router.post("/invest", requireLogin, async (req, res) => {
  try {
    const { price } = req.body;
    const token = req.headers.authorization.split(" ")[1]; // Extract token from header
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded._id;

    // Fetch user details from database
    const user = await users.findById(userId);

    // Send investment email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: "New Investment",
      text: `Hello,\n\n ${user.name} have made an investment of $${price}.\n\nDetails:\nPhone: ${user.phone}\nOrganization: ${user.organization}\nWebsite: ${user.organization_Web}\nUsername: ${user.username}\nBusiness Description: ${user.business_description}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to send email" });
      } else {
        console.log("Email sent: " + info.response);
        res.json({ message: "Investment email sent successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
