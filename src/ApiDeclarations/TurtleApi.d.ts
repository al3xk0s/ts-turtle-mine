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
  forward(this: void): TurtleDoResult;
  back(this: void): TurtleDoResult;
  up(this: void): TurtleDoResult;
  down(this: void): TurtleDoResult;
  turnLeft(this: void): TurtleDoResult;
  turnRight(this: void): TurtleDoResult;

  dig(this: void, side?: ToolSide): TurtleDoResult;
  digUp(this: void, side?: ToolSide): TurtleDoResult;
  digDown(this: void, side?: ToolSide): TurtleDoResult;

  drop(this: void, count?: MineCount): TurtleDoResult;
  dropUp(this: void, count?: MineCount): TurtleDoResult;
  dropDown(this: void, count?: MineCount): TurtleDoResult;

  suck(this: void, count?: MineCount): TurtleDoResult;
  suckUp(this: void, count?: MineCount): TurtleDoResult;
  suckDown(this: void, count?: MineCount): TurtleDoResult;

  attack(this: void, side?: ToolSide): TurtleDoResult;
  attackUp(this: void, side?: ToolSide): TurtleDoResult;
  attackDown(this: void, side?: ToolSide): TurtleDoResult;

  /** Detect block */
  detect(this: void): boolean;

  /** @see turtle.detect */
  detectUp(this: void): boolean;

  /** @see turtle.detect */
  detectDown(this: void): boolean;

  /** Check if the block in front of the turtle is equal to the item in the currently selected slot. */
  compare(this: void): boolean;

  /** @see turtle.compare */
  compareUp(this: void): boolean;

  /** @see turtle.compare */
  compareDown(this: void): boolean;

  /** Compare the item in the currently selected slot to the item in another slot. */
  compareTo(this: void, slot: TurtleSlot): boolean;

  /** Move an item from the selected slot to another one. */
  transferTo(this: void, slot: TurtleSlot, count?: MineCount): boolean;

  getSelectedSlot(this: void): TurtleSlot;

  craft(this: void, limit?: MineCount): TurtleDoResult;

  select(this: void, slot: TurtleSlot): boolean;
  getItemCount(this: void, slot?: TurtleSlot): MineCount;
  getItemSpace(this: void, slot?: TurtleSlot): MineCount;

  getFuelLevel(this: void): TurtleFuel;
  getFuelLimit(this: void): TurtleFuel;
  refuel(this: void, count?: MineCount): TurtleDoResult;

  /**
   * Equip (or unequip) an item on the left side of this turtle.
   * 
   * This finds the item in the currently selected slot and attempts to equip it to the left side of the turtle. 
   * 
   * The previous upgrade is removed and placed into the turtle's inventory. If there is no item in the slot, the previous
   * upgrade is removed, but no new one is equipped.
   */
  equipLeft(this: void): TurtleDoResult;

  /** @see turtle.equipLeft */
  equipRight(this: void): TurtleDoResult;

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
  inspect(this: void): TurtleInspectResult;

  /** @see turtle.inspect */
  inspectUp(this: void): TurtleInspectResult;

  /** @see turtle.inspect */
  inspectDown(this: void): TurtleInspectResult;

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
  getItemDetail(this: void, slot?: TurtleSlot, verbose?: boolean): LuaTable | undefined;

  /** 
   * @param text When placing a sign, set its contents to this text.
   */
  place(this: void, text?: string): TurtleDoResult;

  /** @see turtle.place */
  placeUp(this: void, text?: string): TurtleDoResult;

  /** @see turtle.place */
  placeDown(this: void, text?: string): TurtleDoResult;
}
