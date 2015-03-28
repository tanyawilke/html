var canvas = document.getElementById("clockCanvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock(radius);

function drawClock(radius) {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
}

//Create a drawFace() function for drawing the clock face
function drawFace(ctx, radius) {
    var grad;

    //Draw the white circle
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();

    //Create a radial gradient (95% and 105% of original clock radius)
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);

    //Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');

    //Define the gradient as the stroke style of the drawing object
    ctx.strokeStyle = grad;

    //Define the line width of the drawing object (10% of radius)
    ctx.lineWidth = radius * 0.1;

    //Draw the circle
    ctx.stroke();

    //Draw the clock center
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;

    //Set the font size (of the drawing object) to 15% of the radius
    ctx.font = radius * 0.15 + "px arial";

    //Set the text alignment to the middle and the center of the print position
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    //Calculate the print position (for 12 numbers) to 85% of the radius, rotated (PI/6) for each number
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
}