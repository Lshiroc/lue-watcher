export class Canvas {
    constructor(canvasClassifier, isFullScreen, width = 400, height = 400) {
        this.data = [];
        this.dataSeparated = [];
        this.currentDataSet = [];
        this.lineWidth = 5;
        this.lineCap = "round";
        this.strokeStyle = "rgb(41, 255, 80)";
        this.scrollPoints = [];
        // second line under the main one
        this.layerLineWidth = 14;
        this.layerLineCap = "round";
        this.layerStrokeStyle = "rgba(41, 255, 80, .3)";
        const canvas = document.querySelector(canvasClassifier);
        if (isFullScreen) {
            this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
        else {
            this.width = width;
            this.height = height;
        }
        canvas.width = this.width;
        canvas.height = this.height;
        this.ctx = canvas.getContext("2d");
        let count = 0;
        canvas.addEventListener('click', (e) => {
            const mousePoint = {
                x: e.clientX,
                y: e.clientY
            };
            console.log("scroll ppints", this.scrollPoints);
            this.scrollPoints.forEach((scrollPoint) => {
                if (this.isIntersect(mousePoint, { x: scrollPoint.x, y: scrollPoint.y, radius: 20 })) {
                    let iframe = document.querySelector("#iframe");
                    let iframeContentWindow = iframe.contentWindow;
                    iframeContentWindow.document.documentElement.style.scrollBehavior = "smooth";
                    iframeContentWindow.scrollTo(0, scrollPoint.scrollEnd);
                    console.log("clicked and ", count);
                    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
                    this.currentDataSet = this.dataSeparated[count++];
                    this.style(this.lineWidth, this.lineCap, this.strokeStyle, this.layerLineWidth, this.layerLineCap, this.layerStrokeStyle);
                    this.draw();
                }
            });
        });
    }
    info() {
        return {
            width: this.width,
            height: this.height,
            defaultLineWidth: this.lineWidth,
            defaultLineCap: this.lineCap,
            defaultStrokeStyles: this.strokeStyle,
            currentData: this.data,
            scrollPoints: this.scrollPoints,
            currentDataSet: this.currentDataSet,
            dataSeparated: this.dataSeparated
        };
    }
    style(lineWidth, lineCap, strokeStyle, layerLineWidth, layerLineCap, layerStrokeStyle) {
        this.lineWidth = lineWidth;
        this.lineCap = lineCap;
        this.strokeStyle = strokeStyle;
        this.layerLineWidth = layerLineWidth;
        this.layerLineCap = layerLineCap;
        this.layerStrokeStyle = layerStrokeStyle;
    }
    addData(data) {
        this.data = data;
        this.organizeScrollPoints(data);
    }
    draw() {
        // Drawing main line
        this.drawLine(this.lineWidth, this.lineCap, this.strokeStyle);
        // Drawing the secondary line
        this.drawLine(this.layerLineWidth, this.layerLineCap, this.layerStrokeStyle);
    }
    // Drawing single line with given styles
    drawLine(lineWidth, lineCap, strokeStyle, newData) {
        let data;
        if (newData == null) {
            if (this.data.length == 0)
                return false;
            data = this.currentDataSet;
        }
        else {
            data = newData;
        }
        const ctx = this.ctx;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = lineCap;
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        let currentScroll = 0;
        let newScrollPoint = { scrollEnd: 0, x: 0, y: 0 };
        console.log("reading....", data);
        let startPointX = data[0].width / 2 + data[0].left;
        let startPointY = data[0].height / 2 + data[0].top;
        ctx.moveTo(startPointX, startPointY);
        data.forEach((element) => {
            let pointX;
            let pointY;
            if (element.width > 200 || element.height > 200) {
                // Using percantage
                pointX = (element.mouseX * this.width) / 100;
                pointY = (element.mouseY * this.height) / 100;
                ctx.lineTo(pointX, pointY);
            }
            else {
                // Drawing to the center of the element
                pointX = element.width / 2 + element.left;
                pointY = element.height / 2 + element.top;
                ctx.lineTo(pointX, pointY);
            }
            if (currentScroll != element.scroll) {
                // Adding scrollPoint to respective array
                newScrollPoint.scrollEnd = element.scroll;
                this.scrollPoints = [...this.scrollPoints, newScrollPoint];
                newScrollPoint = {
                    scrollEnd: 0,
                    x: pointX,
                    y: pointY
                };
                console.log(element.mouseX, element.mouseY);
                // Drawing scroll and restyling the ctx 
                this.drawScroll(pointX, pointY, element.scroll);
                ctx.lineWidth = lineWidth;
                ctx.lineCap = lineCap;
                ctx.strokeStyle = strokeStyle;
                ctx.beginPath();
            }
            // if(element.hasScrolled) {
            //     newScrollPoint = {
            //         scrollEnd: 0,
            //         x: pointX,
            //         y: pointY
            //     }
            //     console.log(element.mouseX, element.mouseY);
            //     // Drawing scroll and restyling the ctx 
            //     this.drawScroll(pointX, pointY, element.scroll);
            //     ctx.lineWidth = lineWidth;
            //     ctx.lineCap = lineCap;
            //     ctx.strokeStyle = strokeStyle;
            //     ctx.beginPath();
            // }
        });
        ctx.stroke();
    }
    drawScroll(x, y, scrollEndX) {
        const ctx = this.ctx;
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.stroke();
    }
    isIntersect(point, circle) {
        return Math.sqrt(Math.pow((point.x - circle.x), 2) + Math.pow((point.y - circle.y), 2)) < circle.radius;
    }
    organizeScrollPoints(data) {
        let isPreviousScrolled = false;
        let previousScroll = 0;
        let scrollArr = [];
        data.forEach(element => {
            scrollArr.push(element);
            // if(isPreviousScrolled) {
            //     this.dataSeparated = [...this.dataSeparated, scrollArr];
            //     scrollArr = [];
            // }
            if (previousScroll != element.scroll) {
                this.dataSeparated = [...this.dataSeparated, scrollArr];
                scrollArr = [];
            }
            previousScroll = element.scroll;
            // isPreviousScrolled = element.hasScrolled;
        });
        this.dataSeparated = [...this.dataSeparated, scrollArr];
        this.currentDataSet = this.dataSeparated[0];
        console.log("current data set = ", this.dataSeparated);
    }
}
