
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
let x = 0;
let y= 0;
let isDrawing = false;

canvas.width = window.innerWidth - 20;
canvas.height= window.innerHeight - (0.2*window.innerHeight);

   window.onresize = function() {
   canvas.width = window.innerWidth - 20;
   canvas.height= window.innerHeight - (0.2*window.innerHeight);
};

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
// canvas.dispatchEvent(mouseEvent);
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





function draw(context,x1,y1,x2,y2){
  ctx.strokeStyle = selecting(); //choose color
  ctx.beginPath();
  context.lineWidth = widthSelect();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
