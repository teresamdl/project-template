exports = module.exports

var patients = require('./patients.json');
var requests = require('./requests.json');

exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}
exports.getPatients = function () {
  return patients
}
exports.getRequests = function () {
  return requests
}
