import { Axis } from "./Axis";
import { IMoveSet } from "./IMoveSet";
import { Position } from "./Position";
import { PredictMoveSet } from "./PredictMoveSet";
import { TurtleHeadDirection } from "./TurtleHeadDirection";

export class MoveSet implements IMoveSet {
    constructor(
        initialPosition: Position,
        initialDirection: TurtleHeadDirection,
    ) {
        this._positon = initialPosition;
        this._direction = initialDirection;
    }

    private _positon: Position;
    private _direction: TurtleHeadDirection;

    get position(): Position { return this._positon }
    get direction() : TurtleHeadDirection { return this._direction; }

    createPredict() {
        return new PredictMoveSet(this.position, this.direction);
    }

    forward(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.forward();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtle.forward, changePosition);
    }

    back(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.back();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtle.back, changePosition);
    }

    up(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.up();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtle.up, changePosition);
    }

    down(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.down();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtle.down, changePosition);
    }

    turnLeft(): boolean {
        const changeDirection = (predictMoveset: IMoveSet) => {
            predictMoveset.turnLeft();
            this._direction = predictMoveset.direction;
        }
        return this.doMove(turtle.turnLeft, changeDirection);
    }

    turnRight(): boolean {
        const changeDirection = (predictMoveset: IMoveSet) => {
            predictMoveset.forward();
            this._direction = predictMoveset.direction;
        }
        return this.doMove(turtle.turnRight, changeDirection);
    }

    private doMove(delegate: () => TurtleDoResult, handler: (predictMoveset: IMoveSet) => void) {
        const [success, raison] = delegate();
        if(success) handler(this.createPredict());
        return success;
    }
}