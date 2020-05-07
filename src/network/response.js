exports.success = function (req, res, data, status) {
  //res.header({}); -- Put custon Header
  res.status(status || 200).send({
    error: false,
    data: data,
    status: status,
  });
};
exports.error = function (req, res, error, status) {
  //res.header({}); -- Put custon Header
  res.status(status || 500).send({
    error: error,
    message: error.message,
  });
};
