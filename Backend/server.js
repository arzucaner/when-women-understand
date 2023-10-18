//Dependencies
const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const Passage = require("@passageidentity/passage-node")
const app = express();


//Connect to database
connectDB();

//Passage requires an App ID and, optionally, an API Key
const passageConfig = {
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
};

// Authentication using Passage class instance
let passage = new Passage(passageConfig);
app.get("/authenticatedRoute", async(req, res) => {
  try {
    // Authenticate request using Passage
    let userID = await passage.authenticateRequest(req);
    if (userID) {
      // User is authenticated
      let userData = await passage.user.get(userID);
      console.log(userData);
    }
  } catch (e) {
    // Authentication failed
    console.log(e);
    res.send("Authentication failed!");
  }
});

//Test?
app.get("/", (req, res) => {
  res.send("Hello");
});

//Log server running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));