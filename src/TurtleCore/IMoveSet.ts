import { Position } from "./Position";
import { TurtleHeadDirection } from "./TurtleHeadDirection";

export interface IMoveSet {

    get position(): Position;

    get direction(): TurtleHeadDirection;

    forward(): boolean;

    back(): boolean;

    up(): boolean;

    down(): boolean;

    turnLeft(): boolean;

    turnRight(): boolean;

}
