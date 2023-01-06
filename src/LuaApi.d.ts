declare interface ioAPI{
    read():string;
}

declare const io : ioAPI;

declare function print(value:any):void;

declare function print(...args: any[]): void;