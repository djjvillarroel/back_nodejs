const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.get("/covid/:country", getCovidIndicatorByCountry);
router.get("/covid/all/countries", getCovidCountries);

function getCovidIndicatorByCountry(req, res) {
  console.log(
    "[Init/getCovidIndicatorByCountry]: ------------------------------------"
  );
  controller
    .getCovidIndicatorByCountry(req.params.country)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      console.error("[./network/router.get]=> the error is: ", error.message);
      response.error(req, res, error, 500);
    });
}

function getCovidCountries(req, res) {
  console.log("[Init/getCovidCountries]: ------------------------------------");
  controller
    .getCovidCountries()
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      console.error("[./network/router.get]=> the error is: ", error.message);
      response.error(req, res, error, 500);
    });
}

module.exports = router;
