type Side = "left" | "right";
type TurtleDoResult = LuaMultiReturn<[success: boolean, raison?: string]>;

declare interface TurtleAPI {
    forward(): TurtleDoResult
    back(): TurtleDoResult
}

declare const turtle : TurtleAPI;