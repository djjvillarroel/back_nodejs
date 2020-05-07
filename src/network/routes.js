const express = require("express");
const indicators = require("../components/indicators/network");
const external = require("../components/external/network");

const routes = function (server) {
  server.use("/indicators", indicators);
  server.use("/external", external);
};
module.exports = routes;
