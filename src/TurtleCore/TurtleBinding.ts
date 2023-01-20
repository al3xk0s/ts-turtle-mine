class TurtleDI{
    
    private turtle?: TurtleAPI;

    public getTurtle(){
        if(this.turtle == null) throw new Error("Turtle is null");

        return this.turtle;
    }
    
    public setTurtle(turtle:TurtleAPI){
        this.turtle = turtle;
    }

}

export const turtleDI = new TurtleDI();
