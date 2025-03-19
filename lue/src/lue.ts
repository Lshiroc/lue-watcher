import { UserTrack } from "./types";
import Track from "./track";

export class LUE {
    width: number;
    height: number;
    tracks: UserTrack[] = [];
    connection?: WebSocket;

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
            const track = new Track();
            track.assign({
                x: e.clientX,
                y: e.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                timestamp: e.timeStamp,
            });

            this.tracks.push(track);
        });

        document.addEventListener("scrollend", (e: Event) => {
            const customEvent = e as unknown as MouseEvent;
            const track = new Track();
            track.assign({
                x: customEvent.clientX,
                y: customEvent.clientY,
                scrollX: window.scrollX,
                scrollY: window.scrollY,
                timestamp: customEvent.timeStamp,
            });

            this.tracks.push(track);
        });
    }

    connect(socketURL: string) {
        const socket = new WebSocket(socketURL);

        socket.addEventListener("open", (e) => {
            console.log("Connection successfull");
        })

        socket.addEventListener("message", (e) => {
            console.log("Message recieved: ", e.data);
        })

        this.connection = socket;
    }

    getTracks(){
        return this.tracks;
    }
}
