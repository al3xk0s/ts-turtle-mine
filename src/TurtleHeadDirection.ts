import { Axis } from "./Axis"


export class TurtleHeadDirection {

    static readonly front: TurtleHeadDirection = new TurtleHeadDirection('front', true, Axis.X)
    static readonly right: TurtleHeadDirection = new TurtleHeadDirection('right', true, Axis.Y)
    static readonly back: TurtleHeadDirection = new TurtleHeadDirection('back', false, Axis.X)
    static readonly left: TurtleHeadDirection = new TurtleHeadDirection('left', false, Axis.Y)


    private static turtleHeadDirections: TurtleHeadDirection[] =
        [
            TurtleHeadDirection.front,
            TurtleHeadDirection.right,
            TurtleHeadDirection.back,
            TurtleHeadDirection.left
        ]

    private constructor(
        public readonly name: string,
        public readonly willIncrease: boolean,
        public readonly axis: Axis) {

    }

    public static next(direction: TurtleHeadDirection) : TurtleHeadDirection {
        const currentIndex = this.findIndexByDirection(direction);
        const targetIndex = (currentIndex + 1) % this.turtleHeadDirections.length;
        return this.turtleHeadDirections[targetIndex]
    }

    public static previous(direction: TurtleHeadDirection) : TurtleHeadDirection{
        const currentIndex = this.findIndexByDirection(direction);
        const targetIndex = currentIndex - 1 < 1 ? this.findIndexByDirection.length - 1 : currentIndex - 1;
        return this.turtleHeadDirections[targetIndex];
    }

    private static findIndexByDirection(direction : TurtleHeadDirection): number {
        return this.turtleHeadDirections.findIndex(x => x.name == direction.name);
    }
}

