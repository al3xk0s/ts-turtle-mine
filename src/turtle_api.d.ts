type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type ToolSide = "left" | "right";
type TurtleDoResult = LuaMultiReturn<[success: boolean, raison?: string]>;
type TurtleInspectResult = LuaMultiReturn<[success: boolean, data: LuaTable | string]>;

type TurtleSlot = IntRange<1, 17>
type MineCount = IntRange<0, 65>

type TurtleFuelUnlimited = "unlimited"
type TurtleFuel = number | TurtleFuelUnlimited;

declare interface TurtleAPI {
    forward(): TurtleDoResult;
    back(): TurtleDoResult;
    down(): TurtleDoResult;
    turnLeft(): TurtleDoResult;
    turnRight(): TurtleDoResult;

    dig(side?: ToolSide): TurtleDoResult;
    digUp(side?: ToolSide): TurtleDoResult;
    digDown(side?: ToolSide): TurtleDoResult;

    drop(count?: MineCount) : TurtleDoResult;
    dropUp(count?: MineCount) : TurtleDoResult;
    dropDown(count?: MineCount) : TurtleDoResult;

    suck(count?: MineCount) : TurtleDoResult;
    suckUp(count?: MineCount) : TurtleDoResult;
    suckDown(count?: MineCount) : TurtleDoResult;

    attack(side?: ToolSide) : TurtleDoResult;
    attackUp(side?: ToolSide) : TurtleDoResult;
    attackDown(side?: ToolSide) : TurtleDoResult;

    /** Detect block */
    detect(): boolean;

    /** @see turtle.detect */
    detectUp(): boolean;

    /** @see turtle.detect */
    detectDown(): boolean;

    /** Check if the block in front of the turtle is equal to the item in the currently selected slot. */
    compare() : boolean;

    /** @see turtle.compare */
    compareUp() : boolean;

    /** @see turtle.compare */
    compareDown() : boolean;

    /** Compare the item in the currently selected slot to the item in another slot. */
    compareTo(slot: TurtleSlot) : boolean;

    /** Move an item from the selected slot to another one. */
    transferTo(slot: TurtleSlot, count?: MineCount) : boolean;

    getSelectedSlot() : TurtleSlot;

    craft(limit?: MineCount): TurtleDoResult;

    select(slot: TurtleSlot) : boolean;
    getItemCount(slot?: TurtleSlot) : MineCount;
    getItemSpace(slot?: TurtleSlot) : MineCount;

    getFuelLevel() : TurtleFuel;
    getFuelLimit() : TurtleFuel;
    refuel(count?: MineCount) : TurtleDoResult;

    /**
     * Equip (or unequip) an item on the left side of this turtle.
     * 
     * This finds the item in the currently selected slot and attempts to equip it to the left side of the turtle. 
     * 
     * The previous upgrade is removed and placed into the turtle's inventory. If there is no item in the slot, the previous
     * upgrade is removed, but no new one is equipped.
     */
    equipLeft() : TurtleDoResult;

    /** @see turtle.equipLeft */
    equipRight() : TurtleDoResult;

    /** Get information about the block in front of the turtle.
    * 
    * **Usage**
    * ```lua
    * local has_block, data = turtle.inspect()
    * if has_block then
    *   print(textutils.serialise(data))
    *   --{
    *   --  name = "minecraft:oak_log",
    *   --  state = { axis = "x" },
    *   --  tags = { ["minecraft:logs"] = true, ... },
    *   --}
    * else
    *   print("No block in front of the turtle")
    * end
    * ```
    */
    inspect(): TurtleInspectResult;

    /** @see turtle.inspect */
    inspectUp(): TurtleInspectResult;

    /** @see turtle.inspect */
    inspectDown(): TurtleInspectResult;

    /**
     * Get detailed information about the items in the given slot.
     * 
     * @param slot The slot to get information about. Defaults to the `selected slot`.
     * @param verbose Whether to include "verbose" information. When `true` the method will contain much more information about the item at the cost of taking longer to run.
     * 
     * 
     * **Usage**
     * 
     *  Print the current slot, assuming it contains 13 dirt.
     *  ```lua
     *  print(textutils.serialise(turtle.getItemDetail()))
     *  -- => {
     *  --  name = "minecraft:dirt",
     *  --  count = 13,
     *  -- }
     *  ```
     * 
     */
    getItemDetail(slot?: TurtleSlot, verbose?: boolean): LuaTable | undefined;

    /** 
     * @param text When placing a sign, set its contents to this text.
     */
    place(text?: string) : TurtleDoResult;

    /** @see turtle.place */
    placeUp(text?: string) : TurtleDoResult;

    /** @see turtle.place */
    placeDown(text?: string) : TurtleDoResult;
}

declare const turtle : TurtleAPI;