const path = require("path");
console.log("howdy");

module.exports = function (app) {
  console.log("howdy2");

  app.get("/", (req, res) => {    console.log("howdy/");

    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/exercise", (req, res) => {
    console.log("howdy");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
console.log("yyee");
};