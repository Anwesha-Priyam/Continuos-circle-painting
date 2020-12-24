canvas=document.getElementById("myUserDrawingSpace");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var radius="empty";
var width="empty";
var color="Aqua";
width=4;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("userColour").value;
    width=document.getElementById("lineWidth").value
    radius=document.getElementById("rads").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentPositionOfMouseX=e.clientX-canvas.offsetLeft;
    currentPositionOfMouseY=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown")
    {
        console.log("Current position of X and Y =");
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
    ctx.rect(0, 0, 600, 800);
}