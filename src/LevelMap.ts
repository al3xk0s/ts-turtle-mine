import { PrintableTurtle } from "./Printable";
import { StringBuilder } from "./SringBuilder";

export class LevelMap {
    constructor(
        public readonly columnCount: number,
        public readonly rowCount: number,
        private readonly turtle: PrintableTurtle
    ) {

    }
    public getModel(): string {

        let model = this.createModel(this.rowCount, this.columnCount, "|")
        model.setElement(this.turtle.position.x, this.turtle.position.y)

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
    
    public setElement(row:number,column:number){
        this.model[row][column];
    }
    public getElement(row:number, column:number){
        return this.model[row][column];
    }

    public toString(){

        let sb: StringBuilder = new StringBuilder();

        for (let row = 0; row < this.rowCount; row++) {
            let layer: string[] = []
            for (let column = 0; column < this.columnCount; column++) {
                sb.append(this.model[row][column]);
            }
            sb.append('\n');
        }
        return sb.toString()
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



