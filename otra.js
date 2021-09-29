function zimet(){
    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 80, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "gold";
    ctx.fill();

    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 80, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();

    var canvas=document.getElementById("myCanvas");
    var ctx=canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 80, 30, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "brightyellow";
    ctx.fill();
}