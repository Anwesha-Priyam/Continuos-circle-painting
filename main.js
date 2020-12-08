canvas=document.getElementById("myUserDrawingSpace");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var radius="empty";
var width="empty";
var color="Aqua";
width=4;
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e)
{
    color=document.getElementById("userColour").value;
    width=document.getElementById("lineWidth").value
    radius=document.getElementById("rads").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseMove", my_mousemove);
function my_mousemove(e)
{
    currentPositionOfMouseX=e.clientX-canvasX.offsetLeft;
    currentPositionOfMouseY=e.clientY-canvasY.offsetTop;
    if (mouseEvent=="mouseDown")
    {
        console.log("Current position of X and X =");
        console.log("X - " + currentPositionOfMouseX + "Y - " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
}
function clear()
{
    ctx.clearRect(0, 0, 800, 600);
}