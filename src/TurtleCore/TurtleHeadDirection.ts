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

    public next() : TurtleHeadDirection {
        const currentIndex = this.findIndexByDirection();
        const targetIndex = (currentIndex + 1) % TurtleHeadDirection.turtleHeadDirections.length;
        return TurtleHeadDirection.turtleHeadDirections[targetIndex]
    }

    public previous() : TurtleHeadDirection{
        const currentIndex = this.findIndexByDirection();
        const targetIndex = currentIndex - 1 < 1 ? TurtleHeadDirection.turtleHeadDirections.length - 1 : currentIndex - 1;
        return TurtleHeadDirection.turtleHeadDirections[targetIndex];
    }

    private findIndexByDirection(): number {
        return TurtleHeadDirection.turtleHeadDirections.findIndex(x => x.name == this.name);
    }
}

