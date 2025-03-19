export type UserTrack = {
    x: number;
    y: number;
    isClicked?: boolean;
    isScrolling?: boolean;
    scrollX?: number;
    scrollY?: number;
    timestamp: number;
};