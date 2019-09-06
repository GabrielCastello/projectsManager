const data = require("../data/data");

class RequestsCounter {
  static counter(req, res, next) {
    data.requestsCounter += 1;
    console.log("TCL: RequestsCounter -> counter -> data.requestsCounter", data.requestsCounter);
    next();
  }
}

module.exports = RequestsCounter;
