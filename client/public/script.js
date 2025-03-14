console.log("Injected lol");
var mouseMovements = [];
var el = document.createElement("div");
el.classList.add("customcc");
el.style = "width: 30px; height: 30px; background-color: violet; position: absolute; top: 0; transition: 1s;";
document.body.appendChild(el);
var button = document.createElement("button");
button.classList.add("custombb");
button.innerText = "Stimulate";
button.style = "position: absolute; top: 0;";
var stimulate = function () {
    var elTemp = document.querySelector('.customcc');
    var buttonTemp = document.querySelector('.custombb');
    console.log("Started", mouseMovements);
    buttonTemp.style.background = "violet";
    var i = 0;
    var interval = setInterval(function () {
        console.log("set");
        elTemp.style.left = "".concat(mouseMovements[i].x, "px");
        elTemp.style.top = "".concat(mouseMovements[i].y, "px");
        if (i == mouseMovements.length - 1)
            clearInterval(interval);
        i++;
    }, 50);
    buttonTemp.style.background = "";
};
button.addEventListener("click", stimulate);
document.body.appendChild(button);
document.addEventListener("mousemove", function (e) {
    mouseMovements.push({ x: e.clientX, y: e.clientY });
});
