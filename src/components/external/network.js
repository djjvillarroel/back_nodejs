const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/", getIndicator);

function getIndicator(req, res) {
  console.log("[Init/get]: ------------------------------------");
  controller
    .getAllItems(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      console.error("[./network/router.get]=> the error is: ", error.message);
      response.error(req, res, error, 500);
    });
}

module.exports = router;
