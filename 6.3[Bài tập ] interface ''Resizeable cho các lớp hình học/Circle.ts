import {Resizeable} from "./Resizeable";

export class Circle implements Resizeable{
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    resize(percent):number{
        return this.radius*percent

    }

    getRadius(): number{
        return this.radius;
    }

    setRadius(radius: number):void{
        this.radius = radius;
    }

    toString(): string {
        return "A Circle with radius="
            + this.getRadius();
    }
}