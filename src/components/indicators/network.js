const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");
const router = express.Router();

router.post("/", postIndicator);
router.get("/", getIndicator);
router.patch("/", patchIndicator);
router.delete("/", deleteIndicator);

function postIndicator(req, res) {
  console.log("[Init/post]: ------------------------------------");
  controller
    .addItems(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      console.error("[./network/router.post]=> the error is: ", error.message);
      response.error(req, res, error, 500);
    });
}

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

function patchIndicator(req, res) {
  console.log("[Init/patch]: ------------------------------------");
  controller
    .updateItem(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      console.error("[./network/router.patch]=> the error is: ", error.message);
      response.error(req, res, error, 500);
    });
}

function deleteIndicator(req, res) {
  console.log("[Init/delete]: ------------------------------------");
  controller
    .deleteItem(req.body)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      console.error("[./network/router.delet]=> the error is: ", error.message);
      response.error(req, res, error, 500);
    });
}

module.exports = router;
