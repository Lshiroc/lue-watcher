// console.log("Injected lol");
// const mouseMovements: {x: number, y: number}[] = [];

// const el = document.createElement("div");
// el.classList.add("customcc");
// el.style = "width: 30px; height: 30px; background-color: violet; position: absolute; top: 0; transition: 1s;";
// document.body.appendChild(el);

// const button = document.createElement("button");
// button.classList.add("custombb");
// button.innerText = "Stimulate";
// button.style = "position: absolute; top: 0;";
// const stimulate = () => {
//     const elTemp: HTMLDivElement = document.querySelector('.customcc');
//     const buttonTemp: HTMLButtonElement = document.querySelector('.custombb');
//     console.log("Started", mouseMovements);
//     buttonTemp.style.background = "violet";
//     let i = 0;
//     const interval = setInterval(() => {
//         console.log("set")
//         elTemp.style.left = `${mouseMovements[i].x}px`;
//         elTemp.style.top = `${mouseMovements[i].y}px`;
//         if (i == mouseMovements.length - 1) clearInterval(interval);
//         i++;
//     }, 50);
//     buttonTemp.style.background = "";
// }
// button.addEventListener("click", stimulate);
// document.body.appendChild(button);

// document.addEventListener("mousemove", (e: MouseEvent) => {
//     mouseMovements.push({ x: e.clientX, y: e.clientY });
// });
//     let ticking: boolean =false;
// document.addEventListener("scroll", (e: any) => {
//    let lastKnownScrollPosition = window.scrollY;
   
//    if (!ticking) {
//        window.requestAnimationFrame(() => {
//         console.log(lastKnownScrollPosition);
//     //   doSomething(lastKnownScrollPosition);
//       ticking = false;
//     });

//     ticking = true;
//   }
// })

interface Track {
    x?: number;
    y?: number;
    isClicked?: boolean;
    isScrolling?: boolean;
    scrollX?: number;
    scrollY?: number;
    timestamp: number;
};

interface Scroll {
    x: number;
    y: number;
};

class LUE {
    width: number;
    height: number;
    tracks: Track[] = [];
    
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerWidth;
    }

    simulate() {
        const el = document.createElement("div");
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
    }

    listen() {
        document.addEventListener("mousemove", (e: MouseEvent) => {
            this.tracks.push({
                x: e.clientX,
                y: e.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                timestamp: e.timeStamp,
            });
        });

        document.addEventListener("scrollend", (e: WheelEvent) => {
            this.tracks.push({
                x: e.clientX,
                y: e.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                timestamp: e.timeStamp,
            });
        });
    }

    getTracks(){
        return this.tracks;
    }
}

const lue = new LUE();
lue.listen();
console.log(lue.getTracks());
