import {Resizeable} from "./Resizeable";

class Square implements Resizeable{
    color: string;
    filled: boolean
    side: number
    constructor(color: string,
                filled: boolean,
                side: number) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }

    resize(percent: number) {
        return this.side*=percent
    }
}