const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { userId, message } = req.body;
  console.log("Modtaget besked:", message); // <-- dette vises i terminalen

  const aiReply = `Du skrev: ${message}`;
  res.json({ reply: aiReply }); // <-- dette sender respons til curl
});

module.exports = router;