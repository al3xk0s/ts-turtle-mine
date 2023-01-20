export class StringBuilder
 {
    strArray: string[] = [];
    constructor()
    {
        
    }
    get(nIndex:number): string
    {
        return this.strArray[nIndex];
    }
    isEmpty(): boolean
    {
        return this.strArray.length === 0;
    }
    append(str?: string): void {
        if (str != null) {
            this.strArray.push(str);
        }
    }
    toString(): string
    {
        let str:string = this.strArray.join("");
        return str;
    }

    joinToString(delimeter: string): string {
        return this.strArray.join(delimeter);
    }

    clear()
    {
        this.strArray.length = 0;
    }
 }