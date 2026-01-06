const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { userId, message } = req.body;
  console.log("Message received: ", message);

  const aiReply = `You wrote: ${message}`;
  res.json({ reply: aiReply });
});

module.exports = router;