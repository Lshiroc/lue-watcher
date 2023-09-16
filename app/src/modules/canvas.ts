type Pattern = {
    width: number,
    height: number,
    left: number,
    top: number,
    mouseX: number,
    mouseY: number,
    winWidth: number,
    winHeight: number,
    isLocationCentered: boolean
}

export class Canvas {
    data: Pattern[] = [];
    width: number;
    height: number;
    ctx: CanvasRenderingContext2D;
    lineWidth: number = 5;
    lineCap: CanvasLineCap = "round";
    strokeStyle: string = "rgb(41, 255, 80)";
    
    // second line under the main one
    layerLineWidth: number = 14;
    layerLineCap: CanvasLineCap = "round";
    layerStrokeStyle: string = "rgba(41, 255, 80, .3)";

    constructor(canvasClassifier: string, isFullScreen: boolean, width: number = 400, height: number = 400) {
        const canvas = document.querySelector(canvasClassifier) as HTMLCanvasElement;
        
        if(isFullScreen) {
            this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        } else {
            this.width = width;
            this.height = height;
        }
        canvas.width = this.width;
        canvas.height = this.height;

        this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    }

    info() {
        return {
            width: this.width,
            height: this.height,
            defaultLineWidth: this.lineWidth,
            defaultLineCap: this.lineCap,
            defaultStrokeStyles: this.strokeStyle,
            currentData: this.data
        }
    }

    style(lineWidth: number, lineCap: CanvasLineCap, strokeStyle: string, layerLineWidth: number, layerLineCap: CanvasLineCap, layerStrokeStyle: string) {
        this.lineWidth = lineWidth;
        this.lineCap = lineCap;
        this.strokeStyle = strokeStyle;
        this.layerLineWidth = layerLineWidth;
        this.layerLineCap = layerLineCap;
        this.layerStrokeStyle = layerStrokeStyle;
    }

    draw(dataPattern: Pattern[]) {
        this.data = dataPattern;

        // Drawing main line
        this.drawLine(this.lineWidth, this.lineCap, this.strokeStyle);

        // Drawing the secondary line
        this.drawLine(this.layerLineWidth, this.layerLineCap, this.layerStrokeStyle);
    }

    // Drawing single line with given styles
    drawLine(lineWidth: number, lineCap: CanvasLineCap, strokeStyle: string, newData?: Pattern[]) {
        let data: Pattern[];
        if(newData == null) {
            if(this.data.length == 0) return false;
            data = this.data;
        } else {
            data = newData;
        }
        
        const ctx = this.ctx;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = lineCap;
        ctx.strokeStyle = strokeStyle;

        ctx.beginPath();

        let startPointX: number = data[0].width/2 + data[0].left;
        let startPointY: number = data[0].height/2 + data[0].top;
        ctx.moveTo(startPointX, startPointY);

        data.forEach((element) => {
            if(element.width > 200 || element.height > 200) {
                ctx.lineTo((element.mouseX*this.width)/100, (element.mouseY*this.height/100));
            } else {
                let pointX: number = element.width/2 + element.left;
                let pointY: number = element.height/2 + element.top;
                ctx.lineTo(pointX, pointY);
            }
        })

        ctx.stroke();
    }
}