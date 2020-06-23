
const canvas = document.querySelector('#draw');

function selecting(){
var color = document.getElementById("color");
var select = color.options[color.selectedIndex].value;
console.log(select);

return ctx.strokeStyle = select;
}

const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;
ctx.strokeStyle = selecting(); //choose color
let isDrawing = false;
let lastX = 0;
let lastY = 0;




function draw(e) {
  // stop the function if they are not mouse down
  if(!isDrawing) return;
  //listen for mouse move event
//   console.log(e);
  ctx.beginPath();

  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);