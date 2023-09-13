const canvas = document.querySelector("#myCanvas");
canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
console.log(winWidth, winHeight)
const ctx = canvas.getContext("2d");
ctx.beginPath();

const data = [{"x":2,"y":0},{"x":3,"y":2},{"x":3,"y":3},{"x":5,"y":5},{"x":7,"y":8},{"x":11,"y":11},{"x":13,"y":11},{"x":14,"y":10},{"x":15,"y":10},{"x":28,"y":10},{"x":33,"y":10},{"x":33,"y":10},{"x":38,"y":10},{"x":38,"y":10},{"x":43,"y":10},{"x":50,"y":10},{"x":57,"y":10},{"x":58,"y":10},{"x":63,"y":9},{"x":68,"y":9},{"x":71,"y":15},{"x":71,"y":19},{"x":81,"y":17},{"x":82,"y":14},{"x":84,"y":11},{"x":84,"y":10},{"x":85,"y":9},{"x":85,"y":9},{"x":86,"y":9},{"x":86,"y":9},{"x":88,"y":9},{"x":88,"y":9},{"x":89,"y":9},{"x":90,"y":9},{"x":91,"y":9},{"x":91,"y":9},{"x":92,"y":11},{"x":92,"y":12},{"x":92,"y":15},{"x":91,"y":18},{"x":36,"y":57},{"x":23,"y":74},{"x":32,"y":82}];
ctx.moveTo(data[0].x, data[0].y);

for(let i = 1; i < data.length; i++) {
    ctx.lineTo((winWidth*data[i].x)/100, (winHeight*data[i].y)/100);
}

ctx.stroke();

canvas.requestFullscreen();
