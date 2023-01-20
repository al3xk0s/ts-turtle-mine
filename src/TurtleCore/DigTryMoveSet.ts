import { IMoveSet } from "./IMoveSet"
import { Position } from "./Position";
import { turtleDI } from "./TurtleBinding";
import { TurtleHeadDirection } from "./TurtleHeadDirection";


export class DigTryMoveSet implements IMoveSet {
    constructor(
        moveSet: IMoveSet,
        private readonly attemptLimit: number
    ) {
        this._moveSet = moveSet;
    }
    get position(): Position {
       return this._moveSet.position 
    }
    get direction(): TurtleHeadDirection {
        return this._moveSet.direction;
    }
    forward(): boolean {
        
        const handler = () =>{
            turtleDI.getTurtle().dig()
            turtleDI.getTurtle().attack()
        }

        return new TryTurtleDoHandler(this._moveSet.forward, handler, this.attemptLimit).exec();
    }
    back(): boolean {

        const intermediateStepsHandler = () =>{
            turtleDI.getTurtle().turnRight();
            turtleDI.getTurtle().turnRight();
            this.forward();
            turtleDI.getTurtle().turnRight();
            turtleDI.getTurtle().turnRight();
        }
                
        return new TryTurtleDoHandler(this._moveSet.back, intermediateStepsHandler, this.attemptLimit).exec();
    }
    up(): boolean {

        const intermediateStepsHandler = () =>{
            turtleDI.getTurtle().digUp()
            turtleDI.getTurtle().attackUp()
        }

        return new TryTurtleDoHandler(this._moveSet.up, intermediateStepsHandler, this.attemptLimit).exec();
    }
    down(): boolean {

        const intermediateStepsHandler = () =>{
            turtleDI.getTurtle().digDown()
            turtleDI.getTurtle().attackDown()
        }
        return new TryTurtleDoHandler(this._moveSet.down, intermediateStepsHandler, this.attemptLimit).exec();
    }
    turnLeft(): boolean {
        return this._moveSet.turnLeft();
    }
    turnRight(): boolean {
        return this._moveSet.turnRight()
    }

    private _moveSet: IMoveSet;

    private doMove(delegate: () => TurtleDoResult, handler: (predictMoveset: IMoveSet) => void) {
        const [success, raison] = delegate();
        if(success) handler(this._moveSet);
        return success;
    }
}