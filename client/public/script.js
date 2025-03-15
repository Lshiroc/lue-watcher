// console.log("Injected lol");
// const mouseMovements: {x: number, y: number}[] = [];
;
;
var LUE = /** @class */ (function () {
    function LUE() {
        this.tracks = [];
        this.width = window.innerWidth;
        this.height = window.innerWidth;
    }
    LUE.prototype.simulate = function () {
        var el = document.createElement("div");
        el.classList.add("customcc");
        el.style = "width: 30px; height: 30px; background-color: violet; position: absolute; top: 0; transition: 1s;";
        document.body.appendChild(el);
        // const elTemp: HTMLDivElement = document.querySelector('.customcc');
        // console.log("Started", mouseMovements);
        // let i = 0;
        // const interval = setInterval(() => {
        //     console.log("set")
        //     elTemp.style.left = `${mouseMovements[i].x}px`;
        //     elTemp.style.top = `${mouseMovements[i].y}px`;
        //     if (i == mouseMovements.length - 1) clearInterval(interval);
        //     i++;
        // }, 50);
    };
    LUE.prototype.listen = function () {
        var _this = this;
        document.addEventListener("mousemove", function (e) {
            _this.tracks.push({
                x: e.clientX,
                y: e.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                timestamp: e.timeStamp,
            });
        });
        document.addEventListener("scrollend", function (e) {
            _this.tracks.push({
                x: e.clientX,
                y: e.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                timestamp: e.timeStamp,
            });
        });
    };
    LUE.prototype.getTracks = function () {
        return this.tracks;
    };
    return LUE;
}());
var lue = new LUE();
lue.listen();
console.log(lue.getTracks());
