const MovingObject = require("./moving_object.js")
// const Util = require("./utils.js")
// const Asteroid = require("./asteroid.js")

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  let options = {pos: [50, 50], vel: [10, 10], radius: 25, color: "green"};
  // let options = {pos: [50, 50]};
  let test = new Asteroid(options);
  test.draw(ctx);
});
