import Passage from "@passageidentity/passage-node";

const passageConfig = {
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
};

// example of passage middleware
let passage = new psg(passageConfig);
let passageAuthMiddleware = (() => {
    return async (req, res, next) => {
        try {
            let userID = await passage.authenticateRequest(req);
            if (userID) {
              // user authenticated
              res.userID = userID;  
              next();
            }
        } catch(e) {
            // failed to authenticate
            // we recommend returning a 401 or other "unauthorized" behavior
            console.log(e);
            res.status(401).send('Could not authenticate user!');
        }
    }
})();

app.get("/authenticatedRoute", passageAuthMiddleware, async(req, res) => {
    let userID = res.userID
    // do authenticated things... 
});