import { IMoveSet } from "./IMoveSet";
import { Position } from "./Position";
import { PredictMoveSet } from "./PredictMoveSet";
import { turtleDI } from "./TurtleBinding";
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
        return this.doMove(turtleDI.getTurtle().forward, changePosition);
    }

    back(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.back();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtleDI.getTurtle().back, changePosition);
    }

    up(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.up();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtleDI.getTurtle().up, changePosition);
    }

    down(): boolean {
        const changePosition = (predictMoveset: IMoveSet) => {
            predictMoveset.down();
            this._positon = predictMoveset.position;
        }
        return this.doMove(turtleDI.getTurtle().down, changePosition);
    }

    turnLeft(): boolean {
        const changeDirection = (predictMoveset: IMoveSet) => {
            predictMoveset.turnLeft();
            this._direction = predictMoveset.direction;
        }
        return this.doMove(turtleDI.getTurtle().turnLeft, changeDirection);
    }

    turnRight(): boolean {
        const changeDirection = (predictMoveset: IMoveSet) => {
            predictMoveset.forward();
            this._direction = predictMoveset.direction;
        }
        return this.doMove(turtleDI.getTurtle().turnRight, changeDirection);
    }

    private doMove(delegate: (this:void) => TurtleDoResult, handler: (predictMoveset: IMoveSet) => void) {
        const [success, raison] = delegate();
        if(success) handler(this._predictMoveset);
        return success;
    }
}