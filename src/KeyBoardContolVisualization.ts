import { LevelMap } from "./LevelMap";
import { PrintableTurtle } from "./Printable";

export class KeyBoardControlVisualization{
    
    private turtle: PrintableTurtle = new PrintableTurtle();

    private map = new LevelMap(5, 10 ,this.turtle);

    private keyDelegateMap:Map<string, ()=>boolean >;


    public constructor(){
        let keyDelegateMap = new Map<string, ()=>boolean >;
        keyDelegateMap.set("w", this.turtle.forward);
        keyDelegateMap.set("s", this.turtle.back);
        keyDelegateMap.set("a", this.turtle.turnLeft);
        keyDelegateMap.set("d", this.turtle.turnRight);
        keyDelegateMap.set("c", this.turtle.down);
        keyDelegateMap.set("f", this.turtle.up);
        
        this.keyDelegateMap = keyDelegateMap;
    }

    public Show(){
        print(this.map.getModel())
        while(true){
            let key = io.read()
            let delegate = this.keyDelegateMap.get(key)
            
            if(delegate == null) throw new Error("Ошибочка");

            print(this.map.getModel());
            print("x: " + this.turtle.position.x, "y: "+ this.turtle.position.y, "z: " + this.turtle.position.z, this.turtle.direction.name)
        }
    }

}