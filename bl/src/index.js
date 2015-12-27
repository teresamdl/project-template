exports = module.exports

var patients = require('./patients.json');
var requests = require('./requests.json');
var logIn = require ('./doctors.json');
var logIn2 = require ('./mediators.json');
var reimb = require ('./acts-rmb.json');
var acts = require ('./acts.json');


exports.sayHello = function (name) {
  return 'Hello ' + (name || 'World')
}
exports.getPatients = function () {
  return patients
}
exports.getRequests = function () {
  return requests
}
exports.postLogIn = function (user, pass) {
  
   for(i = 0; i < logIn.length; i++){
		if(user === logIn[i]["user"] || user === logIn2[i]["user"]){
			if(pass === logIn[i]["pass"] || pass === logIn2[i]["pass"])
				return true;
		}
	}
	return false;
}
exports.getActs = function () {
  return acts
}
exports.getReimb = function () {
  return reimb
}
