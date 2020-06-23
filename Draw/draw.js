
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

function draw(context,x1,y1,x2,y2){
  ctx.strokeStyle = selecting(); //choose color
  ctx.beginPath();
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
