import { Axis } from "./Axis";
import { IMoveSet } from "./IMoveSet";
import { Position } from "./Position";
import { TurtleHeadDirection } from "./TurtleHeadDirection";

export class MoveSet implements IMoveSet {
    constructor(
        position: Position,
        public readonly direction: TurtleHeadDirection
    ) {
        this._positon = position;
    }

    private _positon: Position;

    get position(): Position { return this._positon }

    forward(): boolean {
        const changePosition = () => this.calculateNewHorizontalPosition(this.getDirectionMultiplier());
        return this.doMove(turtle.forward, changePosition);
    }

    back(): boolean {
        const changePosition = () => this.calculateNewHorizontalPosition(this.getInvertedMultiplier());
        return this.doMove(turtle.back, changePosition);
    }

    up(): boolean {
        const changePosition = () => this.calcualteNewVerticalPostion(this.getDirectionMultiplier());
        return this.doMove(turtle.up, changePosition);
    }

    down(): boolean {
        const changePosition = () => this.calcualteNewVerticalPostion(this.getInvertedMultiplier());
        return this.doMove(turtle.down, changePosition);
    }

    turnLeft(): boolean {
        const changeDirection = () => this.direction.previous();
        return this.doMove(turtle.turnLeft, changeDirection);
    }

    turnRight(): boolean {
        const changeDirection = () => this.direction.next();
        return this.doMove(turtle.turnRight, changeDirection);
    }

    private doMove(delegate: () => TurtleDoResult, handler: () => void) {
        const [success, raison] = delegate();
        return success;
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