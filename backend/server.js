const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // 🔴 KRITISK

app.post("/chat", (req, res) => {
  console.log("BODY:", req.body);

  res.json({
    reply: "Hej fra backend"
  });
});

app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});