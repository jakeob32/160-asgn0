// DrawTriangle.js (c) 2012 matsuda
function main() {  
  // Retrieve <canvas> element
  var canvas = document.getElementById('example');  
  if (!canvas) { 
    console.log('Failed to retrieve the <canvas> element');
    return false; 
  } 

  // Get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, 400, 400);
}

function handleDrawEvent() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, 400, 400);

  var v1x = parseFloat(document.getElementById('v1-x-coord').value);
  var v1y = parseFloat(document.getElementById('v1-y-coord').value);
  var v1 = new Vector3([v1x, v1y, 0]);
  drawVector(v1, "red");

  var v2x = parseFloat(document.getElementById('v2-x-coord').value);
  var v2y = parseFloat(document.getElementById('v2-y-coord').value);
  var v2 = new Vector3([v2x, v2y, 0]);
  drawVector(v2, "blue");
}

function handleDrawOperationEvent() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
  ctx.fillRect(0, 0, 400, 400);

  var v1x = parseFloat(document.getElementById('v1-x-coord').value);
  var v1y = parseFloat(document.getElementById('v1-y-coord').value);
  var v1 = new Vector3([v1x, v1y, 0]);
  drawVector(v1, "red");

  var v2x = parseFloat(document.getElementById('v2-x-coord').value);
  var v2y = parseFloat(document.getElementById('v2-y-coord').value);
  var v2 = new Vector3([v2x, v2y, 0]);
  drawVector(v2, "blue");

  var operation = document.getElementById('operation').value;
  var scalar = parseFloat(document.getElementById('scalar').value);

  if (operation === "add") {
    var v3 = new Vector3([v1x, v1y, 0]);
    v3.add(v2);
    drawVector(v3, "green");
  } else if (operation === "sub") {
    var v3 = new Vector3([v1x, v1y, 0]);
    v3.sub(v2);
    drawVector(v3, "green");
  } else if (operation === "mul") {
    var v3 = new Vector3([v1x, v1y, 0]);
    v3.mul(scalar);
    drawVector(v3, "green");
    var v4 = new Vector3([v2x, v2y, 0]);
    v4.mul(scalar);
    drawVector(v4, "green");
  } else if (operation === "div") {
    var v3 = new Vector3([v1x, v1y, 0]);
    v3.div(scalar);
    drawVector(v3, "green");
    var v4 = new Vector3([v2x, v2y, 0]);
    v4.div(scalar);
    drawVector(v4, "green");
  } else if (operation === "magnitude") {
    console.log("Magnitude v1: " + v1.magnitude());
    console.log("Magnitude v2: " + v2.magnitude());
  } else if (operation === "normalize") {
    var v3 = new Vector3([v1x, v1y, 0]);
    v3.normalize();
    drawVector(v3, "green");
    var v4 = new Vector3([v2x, v2y, 0]);
    v4.normalize();
    drawVector(v4, "green");
  } else if (operation === "angle") {
    console.log("Angle: " + angleBetween(v1, v2));
  } else if (operation === "area") {
    console.log("Area of the triangle: " + areaTriangle(v1, v2));
  }
}

function areaTriangle(v1, v2) {
  var cross = Vector3.cross(v1, v2);
  var area = cross.magnitude() / 2;
  return area;
}

function angleBetween(v1, v2) {
  var d = Vector3.dot(v1, v2);
  var m1 = v1.magnitude();
  var m2 = v2.magnitude();
  var cosAngle = d / (m1 * m2);
  var angleRad = Math.acos(cosAngle);
  var angleDeg = angleRad * (180 / Math.PI);
  return angleDeg;
}

function drawVector(v, color) {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');

  ctx.strokeStyle = color;

  ctx.beginPath();
  ctx.moveTo(200, 200);
  ctx.lineTo(200 + v.elements[0] * 20, 200 - v.elements[1] * 20);
  ctx.stroke();
}
