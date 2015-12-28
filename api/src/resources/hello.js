var bl = require('../../../bl/src')

exports = module.exports

exports.get = function handler (request, reply) {
  reply(bl.sayHello())
}

exports.post = function handler (request, reply) {
  reply(bl.sayHello(request.payload.name))
}

exports.getPatients = function handler (request, reply) {
  reply(bl.getPatients())
}

exports.getRequests = function handler (request, reply) {
  reply(bl.getRequests())
}

exports.postLogIn = function handler (request, reply) {
  reply(bl.postLogIn(request.payload.user, request.payload.pass))
}

exports.getActs = function handler (request, reply) {
  reply(bl.getActs())
}

exports.getReimb = function handler (request, reply) {
  reply(bl.getReimb())
}
