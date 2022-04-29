import {Fruit} from "./Fruits";

export abstract class Fruit implements Edible
{
    abstract howToEat(): string;
}