import { MoveSet } from "../TurtleCore/MoveSet";
import { Position } from "../TurtleCore/Position";
import { TurtleHeadDirection } from "../TurtleCore/TurtleHeadDirection";
import { IPrintable } from "./IPrintable";

export class PrintableTurtle extends MoveSet implements IPrintable {
    
    private models:Map<TurtleHeadDirection, string>

    constructor(x?:number, y?:number ,z?:number , direction?:TurtleHeadDirection){

        x = x ?? 0;
        y = y ?? 0;
        z = z ?? 0;
        direction = direction ?? TurtleHeadDirection.front;

        super(new Position(x, y, z), direction);
        
        this.models = new Map<TurtleHeadDirection, string>();
        this.models.set(TurtleHeadDirection.front, "^")
        this.models.set(TurtleHeadDirection.back, "V")
        this.models.set(TurtleHeadDirection.right, ">")
        this.models.set(TurtleHeadDirection.left, "<")
    }

    
    public getModel(): string {
        let result = this.models.get(this.direction);

        if(result == undefined) throw new Error("Unknown direction")
        return result as string;
    }
}