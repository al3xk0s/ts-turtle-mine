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
        this._predictMoveset = new PredictMoveSet(initialPosition, initialDirection);
    }

    private _positon: Position;
    private _direction: TurtleHeadDirection;
    private _predictMoveset: PredictMoveSet;

    get position(): Position { return this._positon }
    get direction() : TurtleHeadDirection { return this._direction; }

    createPredict() {
        return this._predictMoveset.copy();
    }

    forward(): boolean {
        const changePosition = ( predictMoveset: IMoveSet) => {
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

    private doMove(delegate: (this:void) => TurtleDoResult, handler: (predictMoveset: IMoveSet) => void) {
        const [success, raison] = delegate();
        if(success) handler(this._predictMoveset);
        return success;
    }
}