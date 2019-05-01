const MovingObject = require("./moving_object.js")
const Util = require("utils.js")

function Asteroid(options) {
  this.color = "gray";
  this.radius = 25;
  this.pos = options.pos;
  // this.vel = Util.randomVec(3)
  // new MovingObject(this)
}

module.exports = Asteroid