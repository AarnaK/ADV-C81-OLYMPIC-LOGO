canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginpath();
ctx.strokestyle = grey;
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = blue;
lineWidth = 5;
ctx.acr(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = black;
lineWidth = 5;
arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = red;
lineWidth = 5;
ctx.acr(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokestyle = yellow;
lineWidth = 5;
arc(330, 200, 40, 0, 2);

ctx.beginpath();
ctx.strokestyle = green;
lineWidth = 5;
arc(430, 200, 40, 0, 2);