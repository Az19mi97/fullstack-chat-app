const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5050;

//Enabling Cross-Origin Resource Sharing
//Allowing frontend on another port to talk to the server
app.use(cors());

//Parsing incoming JSON requests
app.use(express.json()); // 🔴 KRITISK - needed to read JSON from requests

//Handling the POST requests to /chat
app.post("/chat", (req, res) => {
  console.log("BODY:", req.body); //Logging the request body for debugging

  //Responds for now with a simple message
  //Can be replaced with real chat logic
  res.json({ reply: "Hello from the Backend" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});