import {Resizeable} from "./Resizeable";

class Rectangle implements Resizeable{
    width: number;
    length: number;
    color: string;
    filled: boolean;
    constructor(width: number,
                length: number,
                color: string,
                filled: boolean) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }

    resize(percent: number) {
        return this.width*=percent, this.length*=percent
    }

    getArea(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.length);
    }
}