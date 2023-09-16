export class Canvas {
    constructor(canvasClassifier, isFullScreen, width = 400, height = 400) {
        this.data = [];
        this.lineWidth = 5;
        this.lineCap = "round";
        this.strokeStyle = "rgb(41, 255, 80)";
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
    }
    info() {
        return {
            width: this.width,
            height: this.height,
            defaultLineWidth: this.lineWidth,
            defaultLineCap: this.lineCap,
            defaultStrokeStyles: this.strokeStyle,
            currentData: this.data
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
    draw(dataPattern) {
        this.data = dataPattern;
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
            data = this.data;
        }
        else {
            data = newData;
        }
        const ctx = this.ctx;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = lineCap;
        ctx.strokeStyle = strokeStyle;
        ctx.beginPath();
        let startPointX = data[0].width / 2 + data[0].left;
        let startPointY = data[0].height / 2 + data[0].top;
        ctx.moveTo(startPointX, startPointY);
        data.forEach((element) => {
            if (element.width > 200 || element.height > 200) {
                ctx.lineTo((element.mouseX * this.width) / 100, (element.mouseY * this.height / 100));
            }
            else {
                let pointX = element.width / 2 + element.left;
                let pointY = element.height / 2 + element.top;
                ctx.lineTo(pointX, pointY);
            }
        });
        ctx.stroke();
    }
}
