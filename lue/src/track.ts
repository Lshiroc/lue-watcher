import { UserTrack } from "./types";

class Track {
    x: number = 0;
    y: number = 0;
    isClicked?: boolean = false;
    isScrolling?: boolean = false;
    scrollX?: number;
    scrollY?: number;
    timestamp: number = 0;

    assign(track: UserTrack) {
        this.x = track.x;
        this.y = track.y;
        this.isClicked = track.isClicked;
        this.isScrolling = track.isScrolling;
        this.scrollX = track.scrollX;
        this.scrollY = track.scrollY;
        this.timestamp= track.timestamp;
    }
}

export default Track;
