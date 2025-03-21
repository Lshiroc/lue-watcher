export type UserTrack = {
    session_id?: string;
    x: number;
    y: number;
    isClicked?: boolean;
    isScrolling?: boolean;
    scrollX?: number;
    scrollY?: number;
    timestamp: number;
};