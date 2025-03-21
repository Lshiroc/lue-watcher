import { UserTrack } from "./types";
import Track from "./track";

export default class LUE {
    width: number;
    height: number;
    tracks: UserTrack[] = [];
    connection?: WebSocket;
    isConnected: boolean = false;
    sessionId?: string;
    autoSaveInterval: number = 2000;
    intervalId?: number;

    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerWidth;
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

        socket.addEventListener("open", () => {
            this.isConnected = true;
        });

        socket.addEventListener("message", (e) => {
            if(e.data.session_id) {
                this.sessionId = e.data.session_id;
            }
        });

        socket.addEventListener("close", () => {
            this.isConnected = false;
        });

        this.connection = socket;
    }

    autoSave(interval?: number) {
        if(interval) this.autoSaveInterval = interval;
        if (!this.connection) {
            console.error("LUE: Connection is not set. Use connect() to configure a websocket connection");
            return;
        }

        this.intervalId = setInterval(() => {
            this.connection?.send(JSON.stringify(this.getTracks()));
        }, this.autoSaveInterval);
    }

    stopAutoSave() {
        if (!this.intervalId) {
            console.warn("Auto save is not enabled. So stopping auto save does not affect anything.");
            return;
        }
        clearInterval(this.intervalId);
        this.intervalId = undefined;
    }

    save(customFn?: Function) {
        if (customFn) {
            customFn();
        } else if(this.connection) {
            this.connection.send(JSON.stringify(this.getTracks()));
        } else {
            console.error("LUE: Connection is not set. Use connect() to configure a websocket connection");
        }
    }

    getTracks(){
        return this.tracks;
    }
}
