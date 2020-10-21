const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log("body text:", req.body);
});

router.get("/", (req, res) => {
  res.json("success");
});

module.exports = router;
