const { check, oneOf, validationResult } = require("express-validator");
const rating = require("../controllers/rating.controller.js");

module.exports = (app) => {

  app.get("/api/rating", rating.findAll);
  app.post("/api/rating", [
    check('comment').notEmpty(),
    check('station').notEmpty(),
    check('rating').isFloat({ min: 0.1, max: 5 })
  ], rating.create);
  app.get("/api/rating/:id", rating.findOne);
};
