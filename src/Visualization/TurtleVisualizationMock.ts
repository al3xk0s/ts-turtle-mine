export class TurtleVisualizationMock implements TurtleAPI{
    forward(this: void): TurtleDoResult {
        return $multi(true);
    }
    back(this: void): TurtleDoResult {
        return $multi(true);
    }
    up(this: void): TurtleDoResult {
        return $multi(true);
    }
    down(this: void): TurtleDoResult {
        return $multi(true);
    }
    turnLeft(this: void): TurtleDoResult {
        return $multi(true);
    }
    turnRight(this: void): TurtleDoResult {
        return $multi(true);
    }
    dig(this: void, side?: ToolSide | undefined): TurtleDoResult {
        return $multi(true);
    }
    digUp(this: void, side?: ToolSide | undefined): TurtleDoResult {
        return $multi(true);
    }
    digDown(this: void, side?: ToolSide | undefined): TurtleDoResult {
        return $multi(true);
    }
    drop(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    dropUp(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    dropDown(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    suck(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    suckUp(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    suckDown(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    attack(this: void, side?: ToolSide | undefined): TurtleDoResult {
        return $multi(true);
    }
    attackUp(this: void, side?: ToolSide | undefined): TurtleDoResult {
        return $multi(true);
    }
    attackDown(this: void, side?: ToolSide | undefined): TurtleDoResult {
        return $multi(true);
    }
    detect(this: void): boolean {
        return true;
    }
    detectUp(this: void): boolean {
        return true;
    }
    detectDown(this: void): boolean {
        return true;
    }
    compare(this: void): boolean {
        return true;
    }
    compareUp(this: void): boolean {
        return true;
    }
    compareDown(this: void): boolean {
        return true;
    }
    compareTo(this: void, slot: TurtleSlot): boolean {
        return true;
    }
    transferTo(this: void, slot: TurtleSlot, count?: MineCount | undefined): boolean {
        return true;
    }
    getSelectedSlot(this: void): TurtleSlot {
        return 1;
    }
    craft(this: void, limit?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    select(this: void, slot: TurtleSlot): boolean {
        return true;
    }
    getItemCount(this: void, slot?: TurtleSlot | undefined): MineCount {
        return 0;
    }
    getItemSpace(this: void, slot?: TurtleSlot | undefined): MineCount {
        return 0;
    }
    getFuelLevel(this: void): TurtleFuel {
        return 0;
    }
    getFuelLimit(this: void): TurtleFuel {
        return 0;
    }
    refuel(this: void, count?: MineCount | undefined): TurtleDoResult {
        return $multi(true);
    }
    equipLeft(this: void): TurtleDoResult {
        return $multi(true);
    }
    equipRight(this: void): TurtleDoResult {
        return $multi(true);
    }
    inspect(this: void): TurtleInspectResult {
        return $multi(true, "")
    }
    inspectUp(this: void): TurtleInspectResult {
        return $multi(true, "")
    }
    inspectDown(this: void): TurtleInspectResult {
        return $multi(true, "")
    }
    getItemDetail(this: void, slot?: TurtleSlot | undefined, verbose?: boolean | undefined): LuaTable<AnyNotNil, any> | undefined {
        return new LuaTable();
    }
    place(this: void, text?: string | undefined): TurtleDoResult {
        return $multi(true);
    }
    placeUp(this: void, text?: string | undefined): TurtleDoResult {
        return $multi(true);
    }
    placeDown(this: void, text?: string | undefined): TurtleDoResult {
        return $multi(true);
    }
}