//Dependencies
const express = require("express");
const app = express();
const Passage = require("@passageidentity/passage-node");

//Port
const PORT = process.env.PORT || 8000;

//Routes
const connectDB = require("./config/db");
const commentRoutes = require("./routes/comment");
const postRoutes = require("./routes/post");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect to database
connectDB();

//Passage requires an App ID and, optionally, an API Key
const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

app.post("/registration", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      res.json({
        authStatus: "success",
        identifier,
      });
    }
  } catch (e) {
    //Authentication failed
    console.log(e);
    res.json({
      authStatus: "failure",
    });
  }
});

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Setup Routes For Which The Server Is Listening
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

//Log server running
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
