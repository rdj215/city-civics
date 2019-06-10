const db = require("../models")

module.exports = {
    create: function(req,res) {
        console.log("AAA")
        console.log(req.body)
        db.User
        .create(req.body)
        .then(dbModel => {console.log(dbModel); res.json(dbModel)})
        .catch(err => res.status(422).json(err));
    }
}