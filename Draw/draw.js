
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
let x = 0;
let y= 0;
let isDrawing = false;

canvas.width = 700;
canvas.height= 600;


function selecting(){
var color = document.getElementById("color");
var select = color.options[color.selectedIndex].value;
// console.log(select);
return ctx.strokeStyle = select;
}

function widthSelect(){
  var w = document.getElementById("width");
  var s = w.options[w.selectedIndex].value;
  s = parseInt(s);
  console.log(s);
  return ctx.lineWidth = s; //select width of line
  }

function erase(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  // console.log("executed");
}

canvas.addEventListener('mousedown', (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', (e) => {
  if(isDrawing){
    draw(ctx, x,y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
})

canvas.addEventListener('mouseup', (e) => {
  if(isDrawing){
    draw(ctx, x,y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
})

// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
  mousePos = getTouchPos(canvas, e);
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousedown", {
clientX: touch.clientX,
clientY: touch.clientY
});
canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
var mouseEvent = new MouseEvent("mouseup", {});
canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
var touch = e.touches[0];
var mouseEvent = new MouseEvent("mousemove", {
clientX: touch.clientX,
clientY: touch.clientY
});
canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
var rect = canvasDom.getBoundingClientRect();
return {
x: touchEvent.touches[0].clientX - rect.left,
y: touchEvent.touches[0].clientY - rect.top
};
}

// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);


function draw(context,x1,y1,x2,y2){
  ctx.strokeStyle = selecting(); //choose color
  ctx.beginPath();
  context.lineWidth = widthSelect();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
