
export class Position {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number
    ) {
    }

    copyWith(args:{x?:number, y?:number, z?:number}){
        const {x,y,z} = args;
        return new Position(x ?? this.x, y ?? this.y, z ?? this.z );
    }
}
