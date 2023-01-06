declare interface ioAPI{
    read(this: void):string;
}

declare const io : ioAPI;


declare function print(this: void,...args: any[]): void;