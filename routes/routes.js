const path = require("path");

module.exports = function(app) {

    app.get("/exercise", (req, res) => {
        res.render('exercise');
    
      });

};