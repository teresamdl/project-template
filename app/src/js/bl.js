(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{"actID":0,"policy_type":0,"reimb_percentage":1},{"actID":0,"policy_type":1,"reimb_percentage":0.8},{"actID":0,"policy_type":2,"reimb_percentage":0.5},{"actID":0,"policy_type":3,"reimb_percentage":0.2},{"actID":1,"policy_type":0,"reimb_percentage":1},{"actID":1,"policy_type":1,"reimb_percentage":0.8},{"actID":1,"policy_type":2,"reimb_percentage":0.5},{"actID":1,"policy_type":3,"reimb_percentage":0.2},{"actID":2,"policy_type":0,"reimb_percentage":1},{"actID":2,"policy_type":1,"reimb_percentage":0.8},{"actID":2,"policy_type":2,"reimb_percentage":0.5},{"actID":2,"policy_type":3,"reimb_percentage":0.2},{"actID":3,"policy_type":0,"reimb_percentage":1},{"actID":3,"policy_type":1,"reimb_percentage":0.8},{"actID":3,"policy_type":2,"reimb_percentage":0.5},{"actID":3,"policy_type":3,"reimb_percentage":0.2},{"actID":4,"policy_type":0,"reimb_percentage":1},{"actID":4,"policy_type":1,"reimb_percentage":0.8},{"actID":4,"policy_type":2,"reimb_percentage":0.5},{"actID":4,"policy_type":3,"reimb_percentage":0.2},{"actID":5,"policy_type":0,"reimb_percentage":1},{"actID":5,"policy_type":1,"reimb_percentage":0.8},{"actID":5,"policy_type":2,"reimb_percentage":0.5},{"actID":5,"policy_type":3,"reimb_percentage":0.2},{"actID":6,"policy_type":0,"reimb_percentage":1},{"actID":6,"policy_type":1,"reimb_percentage":0.8},{"actID":6,"policy_type":2,"reimb_percentage":0.5},{"actID":6,"policy_type":3,"reimb_percentage":0.2}]
},{}],2:[function(require,module,exports){
module.exports=[{"actID":0,"name":"consulta","cost":50},{"actID":1,"name":"raio-X","cost":100},{"actID":2,"name":"tomografia","cost":150},{"actID":3,"name":"exame","cost":75},{"actID":4,"name":"cirurgia","cost":5000},{"actID":5,"name":"transfusão","cost":1000},{"actID":6,"name":"ecograma","cost":200}]
},{}],3:[function(require,module,exports){
module.exports=[{"docID":0,"name":"Leonor Pereira","speciality":"Clínica Geral","user":"doc0","pass":"pass"},{"docID":1,"name":"João Santos","speciality":"Ortopedia","user":"doc1","pass":"pass"},{"docID":2,"name":"Guilherme Silva","speciality":"Neurocirurgia","user":"doc2","pass":"pass"},{"docID":3,"name":"Francisco Martins","speciality":"Pediatria","user":"doc3","pass":"pass"},{"docID":4,"name":"Leonor Ferreira","speciality":"Ortopedia","user":"doc4","pass":"pass"},{"docID":5,"name":"Matilde Santos","speciality":"Cardiologia","user":"doc5","pass":"pass"},{"docID":6,"name":"Mariana Silva","speciality":"Psiquiatria","user":"doc6","pass":"pass"},{"docID":7,"name":"Tomás Martins","speciality":"Pediatria","user":"doc7","pass":"pass"},{"docID":8,"name":"Matilde Ferreira","speciality":"Clínica Geral","user":"doc8","pass":"pass"},{"docID":9,"name":"Leonor Santos","speciality":"Neurocirurgia","user":"doc9","pass":"pass"}]
},{}],4:[function(require,module,exports){
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

},{"./acts-rmb.json":1,"./acts.json":2,"./doctors.json":3,"./mediators.json":5,"./patients.json":6,"./requests.json":7}],5:[function(require,module,exports){
module.exports=[{"medID":0,"name":"Beatriz Santos","user":"med0","pass":"pass"},{"medID":1,"name":"Guilherme Silva","user":"med1","pass":"pass"},{"medID":2,"name":"Rodrigo Santos","user":"med2","pass":"pass"},{"medID":3,"name":"Guilherme Santos","user":"med3","pass":"pass"},{"medID":4,"name":"Tomás Oliveira","user":"med4","pass":"pass"},{"medID":5,"name":"Matilde Oliveira","user":"med5","pass":"pass"},{"medID":6,"name":"João Martins","user":"med6","pass":"pass"},{"medID":7,"name":"Carolina Oliveira","user":"med7","pass":"pass"},{"medID":8,"name":"Matilde Ferreira","user":"med8","pass":"pass"},{"medID":9,"name":"Maria Oliveira","user":"med9","pass":"pass"}]
},{}],6:[function(require,module,exports){
module.exports=

[{"patID":0,"name":"Tomás Silva","policy_number":1000,"policy_type":0},
  {"patID":1,"name":"Tomás Santos","policy_number":1001,"policy_type":2},
  {"patID":2,"name":"Francisco Santos","policy_number":1002,"policy_type":1},
  {"patID":3,"name":"Mariana Pereira","policy_number":1003,"policy_type":2},
  {"patID":4,"name":"Leonor Oliveira","policy_number":1004,"policy_type":0},
  {"patID":5,"name":"Santiago Ferreira","policy_number":1005,"policy_type":1},
  {"patID":6,"name":"Rodrigo Silva","policy_number":1006,"policy_type":1},
  {"patID":7,"name":"João Martins","policy_number":1007,"policy_type":2},
  {"patID":8,"name":"Carolina Ferreira","policy_number":1008,"policy_type":0},
  {"patID":9,"name":"Beatriz Santos","policy_number":1009,"policy_type":2},
  {"patID":10,"name":"Leonor Costa","policy_number":1010,"policy_type":2},
  {"patID":11,"name":"Maria Ferreira","policy_number":1011,"policy_type":0},
  {"patID":12,"name":"Leonor Pereira","policy_number":1012,"policy_type":0},
  {"patID":13,"name":"Leonor Costa","policy_number":1013,"policy_type":0},
  {"patID":14,"name":"Tomás Ferreira","policy_number":1014,"policy_type":1},
  {"patID":15,"name":"João Martins","policy_number":1015,"policy_type":2},
  {"patID":16,"name":"Rodrigo Costa","policy_number":1016,"policy_type":3},
  {"patID":17,"name":"Matilde Silva","policy_number":1017,"policy_type":0},
  {"patID":18,"name":"Beatriz Pereira","policy_number":1018,"policy_type":0},
  {"patID":19,"name":"Guilherme Oliveira","policy_number":1019,"policy_type":2}]

},{}],7:[function(require,module,exports){
module.exports=[{"reqID":0,"repID":99,"status":"REJECTED"},
  {"reqID":1,"repID":98,"status":"REQUESTED"},
  {"reqID":2,"repID":97,"status":"REJECTED"},
  {"reqID":3,"repID":96,"status":"PENDING"},
  {"reqID":4,"repID":95,"status":"ACCEPTED"},
  {"reqID":5,"repID":94,"status":"REQUESTED"},
  {"reqID":6,"repID":93,"status":"PENDING"},
  {"reqID":7,"repID":92,"status":"PENDING"},
  {"reqID":8,"repID":91,"status":"PENDING"},
  {"reqID":9,"repID":90,"status":"PENDING"},
  {"reqID":10,"repID":89,"status":"REQUESTED"},
  {"reqID":11,"repID":88,"status":"REQUESTED"},
  {"reqID":12,"repID":87,"status":"REQUESTED"},
  {"reqID":13,"repID":86,"status":"REQUESTED"},
  {"reqID":14,"repID":85,"status":"REQUESTED"},
  {"reqID":15,"repID":84,"status":"ACCEPTED"},
  {"reqID":16,"repID":83,"status":"PENDING"},
  {"reqID":17,"repID":82,"status":"PENDING"},
  {"reqID":18,"repID":81,"status":"REJECTED"},
  {"reqID":19,"repID":80,"status":"REQUESTED"},
  {"reqID":20,"repID":79,"status":"ACCEPTED"},
  {"reqID":21,"repID":78,"status":"PENDING"},
  {"reqID":22,"repID":77,"status":"PENDING"},
  {"reqID":23,"repID":76,"status":"ACCEPTED"},
  {"reqID":24,"repID":75,"status":"REJECTED"},
  {"reqID":25,"repID":74,"status":"REQUESTED"},
  {"reqID":26,"repID":73,"status":"ACCEPTED"},{"reqID":27,"repID":72,"status":"REJECTED"},{"reqID":28,"repID":71,"status":"REQUESTED"},{"reqID":29,"repID":70,"status":"REQUESTED"},{"reqID":30,"repID":69,"status":"ACCEPTED"},{"reqID":31,"repID":68,"status":"REJECTED"},{"reqID":32,"repID":67,"status":"REQUESTED"},{"reqID":33,"repID":66,"status":"PENDING"},{"reqID":34,"repID":65,"status":"ACCEPTED"},{"reqID":35,"repID":64,"status":"PENDING"},{"reqID":36,"repID":63,"status":"REJECTED"},{"reqID":37,"repID":62,"status":"ACCEPTED"},{"reqID":38,"repID":61,"status":"PENDING"},{"reqID":39,"repID":60,"status":"REQUESTED"},{"reqID":40,"repID":59,"status":"REJECTED"},{"reqID":41,"repID":58,"status":"REJECTED"},{"reqID":42,"repID":57,"status":"REJECTED"},{"reqID":43,"repID":56,"status":"REQUESTED"},{"reqID":44,"repID":55,"status":"REJECTED"},{"reqID":45,"repID":54,"status":"REQUESTED"},{"reqID":46,"repID":53,"status":"ACCEPTED"},{"reqID":47,"repID":52,"status":"ACCEPTED"},{"reqID":48,"repID":51,"status":"ACCEPTED"},{"reqID":49,"repID":50,"status":"PENDING"},{"reqID":50,"repID":49,"status":"REJECTED"},{"reqID":51,"repID":48,"status":"REQUESTED"},{"reqID":52,"repID":47,"status":"REQUESTED"},{"reqID":53,"repID":46,"status":"ACCEPTED"},{"reqID":54,"repID":45,"status":"PENDING"},{"reqID":55,"repID":44,"status":"PENDING"},{"reqID":56,"repID":43,"status":"REJECTED"},{"reqID":57,"repID":42,"status":"ACCEPTED"},{"reqID":58,"repID":41,"status":"ACCEPTED"},{"reqID":59,"repID":40,"status":"ACCEPTED"},{"reqID":60,"repID":39,"status":"ACCEPTED"},{"reqID":61,"repID":38,"status":"REJECTED"},{"reqID":62,"repID":37,"status":"ACCEPTED"},{"reqID":63,"repID":36,"status":"REQUESTED"},{"reqID":64,"repID":35,"status":"REQUESTED"},{"reqID":65,"repID":34,"status":"REJECTED"},{"reqID":66,"repID":33,"status":"ACCEPTED"},{"reqID":67,"repID":32,"status":"PENDING"},{"reqID":68,"repID":31,"status":"REJECTED"},{"reqID":69,"repID":30,"status":"REQUESTED"},{"reqID":70,"repID":29,"status":"REQUESTED"},{"reqID":71,"repID":28,"status":"REJECTED"},{"reqID":72,"repID":27,"status":"REJECTED"},{"reqID":73,"repID":26,"status":"REQUESTED"},{"reqID":74,"repID":25,"status":"ACCEPTED"},{"reqID":75,"repID":24,"status":"PENDING"},{"reqID":76,"repID":23,"status":"ACCEPTED"},{"reqID":77,"repID":22,"status":"ACCEPTED"},{"reqID":78,"repID":21,"status":"PENDING"},{"reqID":79,"repID":20,"status":"REJECTED"},{"reqID":80,"repID":19,"status":"PENDING"},{"reqID":81,"repID":18,"status":"REQUESTED"},{"reqID":82,"repID":17,"status":"REJECTED"},{"reqID":83,"repID":16,"status":"PENDING"},{"reqID":84,"repID":15,"status":"REQUESTED"},{"reqID":85,"repID":14,"status":"REQUESTED"},{"reqID":86,"repID":13,"status":"REQUESTED"},{"reqID":87,"repID":12,"status":"ACCEPTED"},{"reqID":88,"repID":11,"status":"ACCEPTED"},{"reqID":89,"repID":10,"status":"PENDING"},{"reqID":90,"repID":9,"status":"ACCEPTED"},{"reqID":91,"repID":8,"status":"REQUESTED"},{"reqID":92,"repID":7,"status":"REQUESTED"},{"reqID":93,"repID":6,"status":"ACCEPTED"},{"reqID":94,"repID":5,"status":"REJECTED"},{"reqID":95,"repID":4,"status":"PENDING"},{"reqID":96,"repID":3,"status":"REQUESTED"},{"reqID":97,"repID":2,"status":"REQUESTED"},{"reqID":98,"repID":1,"status":"ACCEPTED"},{"reqID":99,"repID":0,"status":"REQUESTED"}]

},{}]},{},[4])(4)
});