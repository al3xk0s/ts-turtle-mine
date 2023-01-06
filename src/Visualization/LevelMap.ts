import { PrintableTurtle } from "./PrintableTurtle";
import { StringBuilder } from "../Util/SringBuilder";

export class LevelMap {
    constructor(
        public readonly columnCount: number,
        public readonly rowCount: number,
        private readonly turtle: PrintableTurtle
    ) {

    }
    public getModel(): string {

        let model = this.createModel(this.rowCount, this.columnCount, "|")
        model.setElement(this.turtle.position.x, this.turtle.position.y, this.turtle.getModel())

        return model.toString();
    }
    private createModel(rowCount: number, columnCount: number, defaultSymbol: string) {
        return Chunk.Create(rowCount, columnCount, defaultSymbol);
    }
}


class Chunk {

    private constructor(
        private model: string[][],
        private rowCount: number,
        private columnCount: number) {

    }
    
    public setElement(row:number,column:number, symbol:string){
        this.model[row][column] = symbol;
    }
    public getElement(row:number, column:number){
        return this.model[row][column];
    }

    public toString(){

        let sb: StringBuilder = new StringBuilder();

        let model = "";

        for (let row = 0; row < this.rowCount; row++) {
            let layer: string[] = []
            for (let column = 0; column < this.columnCount; column++) {
                model = model + this.model[row][column];
            }
            model = model + '\n';
        }
        return model
    }
    
    public static Create(rowCount: number, columnCount: number, defaultSymbol: string){
        let model: string[][] = [];
        for (let row = 0; row < rowCount; row++) {
            let layer: string[] = []
            for (let column = 0; column < columnCount; column++) {
                layer[column] = defaultSymbol;
            }
            model[row] = layer;
        }
        return new Chunk(model, rowCount, columnCount);
    }
}



