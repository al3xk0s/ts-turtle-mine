import { Axis } from "./Axis";
import { IMoveSet } from "./IMoveSet";
import { Position } from "./Position";
import { TurtleHeadDirection } from "./TurtleHeadDirection";

enum VerticalMultiplier {
    Up = 1,
    Down = -1,
}


export class PredictMoveSet implements IMoveSet {
    constructor(initialPosition: Position, initialDirection: TurtleHeadDirection) {
        this._position = initialPosition;
        this._direction = initialDirection;
    }

    private _position: Position;
    private _direction: TurtleHeadDirection;

    get position(): Position {
        return this._position;
    }

    get direction(): TurtleHeadDirection {
        return this._direction;
    }

    forward(): boolean {
        const multiplier = this.getDirectionMultiplier();
        this._position = this.calculateNewHorizontalPosition(multiplier);
        return true;
    }

    back(): boolean {
        const multiplier = this.getInvertedMultiplier();
        this._position = this.calculateNewHorizontalPosition(multiplier);
        return true;
    }

    up(): boolean {
        const multiplier = VerticalMultiplier.Up;
        this._position = this.calcualteNewVerticalPostion(multiplier);
        return true;
    }

    down(): boolean {
        const multiplier = VerticalMultiplier.Down;
        this._position = this.calcualteNewVerticalPostion(multiplier);
        return true;
    }

    turnLeft(): boolean {
        this._direction = this.direction.previous();
        return true;
    }

    turnRight(): boolean {
        this._direction = this.direction.next();
        return true;
    }

    copy(args?: { position?: Position, direction?: TurtleHeadDirection }) {
        const { position, direction } = args ?? {};

        return new PredictMoveSet(
            position ?? this.position,
            direction ?? this.direction,
        );
    }

    private calculateNewHorizontalPosition(multiplier: number) {
        if (this.direction.axis == Axis.X)
            return this.position.copyWith({ x: this.position.x + multiplier })
        return this.position.copyWith({ y: this.position.y + multiplier })
    }

    private calcualteNewVerticalPostion(multiplier: number) {
        return this.position.copyWith({ z: this.position.z + multiplier })
    }

    private getDirectionMultiplier() {
        return this.direction.willIncrease ? 1 : -1;
    }

    private getInvertedMultiplier() {
        return this.inverMultiplier(this.getDirectionMultiplier())
    }

    private inverMultiplier(multiplier: number) {
        return multiplier * -1;
    }
}